"use client";

import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// true for dark, false for light, undefined for default
const ThemeContext = createContext({
  theme: undefined as boolean | undefined,
  toggleTheme: () => {},
});

export function useTheme(): {
  theme: boolean | undefined;
  toggleTheme: () => void;
} {
  return useContext(ThemeContext);
}

interface Matcher {
  matches: boolean;
  addEventListener(typ: "change", cb: () => void): void;
  removeEventListener(typ: "change", cb: () => void): void;
}

const defaultMatcher: Matcher = {
  matches: false,
  addEventListener() {},
  removeEventListener() {},
};

export default function ThemeProvider({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  const [theme, setTheme] = useState(undefined as boolean | undefined);

  // fetch theme from storage events
  useEffect(() => {
    function listener(): void {
      const theme = window.localStorage.getItem("theme");
      if (theme === "dark") {
        setTheme(true);
      } else if (theme === "light") {
        setTheme(false);
      } else {
        window.localStorage.removeItem("theme");
        setTheme(undefined);
      }
    }

    listener();
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [setTheme]);

  // persist theme
  useEffect(() => {
    if (theme === undefined) {
      window.localStorage.removeItem("theme");
    } else if (theme) {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // set actual dark state that toggles class by watching the media query
  const [matcher, setMatcher] = useState(defaultMatcher);
  useEffect(
    () => setMatcher(window.matchMedia("(prefers-color-scheme: dark)")),
    [setMatcher],
  );
  const [dark, setDark] = useState(theme ?? matcher.matches);
  useEffect(() => {
    setDark(theme ?? matcher.matches);
    const listener = () => setDark(theme ?? matcher.matches);
    matcher.addEventListener("change", listener);
    return () => matcher.removeEventListener("change", listener);
  }, [matcher, theme, setDark]);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // implement toggle theme that smartly has the first toggle always invert the
  // theme whether it's manually set or set to system
  const [toggled, setToggled] = useState(false);
  const toggleTheme = useCallback(() => {
    if (theme === undefined) {
      setTheme(!matcher.matches);
    } else if (toggled) {
      setTheme(undefined);
      setToggled(false);
    } else {
      setTheme(!theme);
      setToggled(true);
    }
  }, [theme, setTheme, matcher.matches, toggled, setToggled]);
  const context = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
