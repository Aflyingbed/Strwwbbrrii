"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const isMobile = () => {
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  return /iPhone|iPad|iPod|Android/i.test(userAgent);
};

export default function MediaLoader({
	src,
	type,
}: {
	src: string;
	type: 'image' | 'video';
}) {
	const [loading, setLoading] = useState(true);
	const [showPlayButton, setShowPlayButton] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		if (type === "video" && videoRef.current) {
			const video = videoRef.current;

			const handleCanPlay = () => setLoading(false);
			const handleMouseEnter = () => {
				if (!isMobile()) {
					video.play().catch(console.error);
				}
			};
			const handleMouseLeave = () => {
				if (!isMobile()) {
					video.pause();
					video.currentTime = 0;
				}
			};

			video.addEventListener("canplay", handleCanPlay);
			containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
			containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

			if (video.readyState >= 3) handleCanPlay();

			return () => {
				video.removeEventListener("canplay", handleCanPlay);
				containerRef.current?.removeEventListener(
					"mouseenter",
					handleMouseEnter,
				);
				containerRef.current?.removeEventListener(
					"mouseleave",
					handleMouseLeave,
				);
			};
		}
	}, [type, src]);
	
	useEffect(() => {
		if (type === "video" && videoRef.current) {
			const video = videoRef.current;

			const handlePlay = () => setShowPlayButton(false);
			const handlePause = () => setShowPlayButton(true);
			const handleEnded = () => {
				setShowPlayButton(true);
				video.currentTime = 0;
			};

			video.addEventListener("play", handlePlay);
			video.addEventListener("pause", handlePause);
			video.addEventListener("ended", handleEnded);

			return () => {
				video.removeEventListener("play", handlePlay);
				video.removeEventListener("pause", handlePause);
				video.removeEventListener("ended", handleEnded);
			};
		}
	}, [type, src]);

	return (
		<div className="relative aspect-square" ref={containerRef}>
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center bg-pink-50/50">
					<video
						src="/animations/loader.webm"
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			)}

			{type === "image" ? (
				<Image
					src={src}
					alt=""
					fill
					className="object-cover"
					onLoad={() => setLoading(false)}
					onError={() => setLoading(false)}
				/>
			) : (
				<div className="relative w-full h-full">
					<video
						ref={videoRef}
						src={src}
						className="object-cover w-full h-full"
						playsInline
						preload="auto"
					/>
					{showPlayButton && (
						<div className="absolute inset-0 flex items-center justify-center bg-black/30">
							<svg
								className="w-12 h-12 text-pink-500/80"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
