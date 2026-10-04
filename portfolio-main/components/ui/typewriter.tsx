"use client";

import { useEffect, useState } from "react";

const TEXTS = [
  "Full Stack Developer",
  "Data Engineering Enthusiast",
  "Systems Programmer",
  "ML & AI Builder",
  "Open Source Contributor",
];

export function TypewriterText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TEXTS[textIndex];
    const delay = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % TEXTS.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, textIndex]);

  return (
    <span className="font-mono text-brand-400">
      {displayed}
      <span className="animate-blink text-brand-400">|</span>
    </span>
  );
}
