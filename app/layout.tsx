import { ReactElement, ReactNode } from "react";
import ScrollProvider from "../components/scroll";
import ThemeProvider from "../components/theme";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body>
        <ScrollProvider />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
