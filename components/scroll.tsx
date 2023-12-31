"use client";

import { useEffect } from "react";

function scroll(): void {
  document.documentElement.dataset.scroll = (window.scrollY > 0).toString();
}

export default function Scroll(): null {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    scroll();
  }, []);
  return null;
}
