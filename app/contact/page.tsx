import Image from "next/image";
import SFXLink from "../_components/SFXLink";
import BackButton from "../_components/BackButton";
import CatAnim from "../_components/CatAnim";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Strwwbbrrii | Contact"
}


export default function Contact() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center relative pb-20">
			<div className="flex-1 flex flex-col items-center justify-center">
				<h4 className="font-providence text-2xl md:text-3xl mb-4">
					Get in contact
				</h4>
				<h1 className="font-sangsang text-5xl md:text-6xl lg:text-7xl mb-8">
					strwwbbrrii's socials
				</h1>
				<div className="flex flex-wrap justify-center gap-4 md:gap-10">
					<SFXLink
						href="https://www.instagram.com/strwwbbrrii/"
						className="hover:scale-105 transition-transform duration-200 ease-in-out"
						aria-label="Navigate to Instagram"
						target="_blank"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/instagram.svg"
								alt="Gallery preview"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Instagram</p>
						</div>
					</SFXLink>

					<SFXLink
						href="https://www.threads.net/@strwwbbrrii"
						className="hover:scale-105 transition-transform duration-200 ease-in-out"
						aria-label="Navigate to Threads"
						target="_blank"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/threads.svg"
								alt="Threads"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Threads</p>
						</div>
					</SFXLink>

					<SFXLink
						href="https://www.pinterest.com/strwwbbrrii/"
						className="hover:scale-105 transition-transform duration-200 ease-in-out "
						aria-label="Navigate to Pinterest"
						target="_blank"
					>
						<div className="flex flex-col items-center gap-2">
							<Image
								src="/svgs/pinterest.svg"
								alt="Pinterest preview"
								width={100}
								height={100}
							/>
							<p className="font-providence text-lg">Pinterest</p>
						</div>
					</SFXLink>
				</div>
				<CatAnim />
			</div>

			<div className="absolute bottom-8">
				<BackButton />
			</div>
		</div>
	);
}
