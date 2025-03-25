'use client';

import Link from "next/link";
import { useEffect } from 'react';

let hoverAudio: HTMLAudioElement;
let clickAudio: HTMLAudioElement;

export default function BackButton({
  href = "/",
  label = "Back to Home",
  className = ""
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  useEffect(() => {
    hoverAudio = new Audio('/sfx/hover.wav');
    clickAudio = new Audio('/sfx/click.mp3');
  }, []);

  const playHover = () => {
    hoverAudio.currentTime = 0;
    hoverAudio.play().catch(() => {});
  };

  const playClick = () => {
    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {});
  };

  return (
    <Link 
      href={href}
      onClick={playClick}
      onMouseEnter={playHover}
      className={`group flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors ${className} animate-bounce p-2`}
      aria-label={label}
    >
      <svg
        className="h-6 w-6 group-hover:-translate-x-1 transition-transform animate-wiggle"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          className="fill-pink-200"
        />
      </svg>
      <span className="font-sangsang text-xl">{label}</span>
    </Link>
  );
}
