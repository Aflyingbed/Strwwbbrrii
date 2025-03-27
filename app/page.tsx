import Image from "next/image";
import SFXLink from "./_components/SFXLink";
import CatAnim from "./_components/CatAnim";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center relative pb-20">
			<div className="flex-1 flex flex-col items-center justify-center">
				<h4 className="font-providence text-2xl md:text-3xl mb-4">
					Welcome to
				</h4>
				<h1 className="font-sangsang text-5xl md:text-6xl lg:text-7xl mb-8">
					strwwbbrrii's house
				</h1>
				<div className="flex flex-wrap justify-center gap-4 md:gap-10">
					<SFXLink
						href="/gallery"
						className="hover:scale-105 transition-transform duration-200 ease-in-out"
						aria-label="Navigate to Gallery"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/gallery.svg"
								alt="Gallery preview"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Gallery</p>
						</div>
					</SFXLink>

					<SFXLink
						href="/commissions"
						className="hover:scale-105 transition-transform duration-200 ease-in-out"
						aria-label="Navigate to Commissions"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/commissions.svg"
								alt="Commissions preview"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Commissions</p>
						</div>
					</SFXLink>

					<SFXLink
						href="/contact"
						className="hover:scale-105 transition-transform duration-200 ease-in-out"
						aria-label="Navigate to Contact"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/contact.svg"
								alt="Contact preview"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Contact</p>
						</div>
					</SFXLink>
				</div>
				<CatAnim />
			</div>

			<div className="absolute bottom-8">
				<p className=" text-pink-700 font-providence animate-bounce">
					Made with{" "}
					<Image
						src="/svgs/heart.svg"
						alt="heart"
						width={32}
						height={32}
						className="inline animate-spin"
					/>{" "}
					by{" "}
					<SFXLink
						href="https://github.com/aflyingbed"
						target="_blank"
						className="text-xl font-sangsang animate-pulse"
						aria-label="Visit developer's GitHub"
					>
						aflyingbed
					</SFXLink>
				</p>
			</div>
		</div>
	);
}
