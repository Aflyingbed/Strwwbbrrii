'use client';

import { useEffect, useRef } from 'react';

export default function CatAnim() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video) {
      video.addEventListener('click', () => {
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch(error => {
            console.error('Error playing cat sound:', error);
          });
        }
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="/animations/cat.webm"
        autoPlay
        loop
        muted
        playsInline
        className="cursor-pointer"
      />
      <audio ref={audioRef} src="/sfx/cat.mp3" />
    </div>
  );
}