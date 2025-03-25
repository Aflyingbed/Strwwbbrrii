// app/not-found.js
import BackButton from "./_components/BackButton";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4">
			<video src="/animations/404.webm" autoPlay loop muted playsInline />
			<div className="flex items-center gap-3 mb-4">
				<Image
					src="/svgs/error.svg"
					alt="Gallery preview"
					width={100}
					height={100}
				/>
			</div>
			<BackButton />
		</div>
	);
}
