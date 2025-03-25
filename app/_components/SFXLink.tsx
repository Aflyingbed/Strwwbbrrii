"use client";

import { useEffect } from "react";
import Link from "next/link";

let hoverAudio: HTMLAudioElement;
let clickAudio: HTMLAudioElement;

export default function SFXLink({
	href,
	children,
	className,
	target,
	rel,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
	target?: string;
	rel?: string;
}) {
	useEffect(() => {
		hoverAudio = new Audio("/sfx/hover.wav");
		clickAudio = new Audio("/sfx/click.mp3");
	}, []);

	const playHover = () => {
		setTimeout(() => {
    hoverAudio.currentTime = 0;
    hoverAudio.play();
  }, 100); 
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
			className={className}
			target={target}
			rel={rel}
		>
			{children}
		</Link>
	);
}
