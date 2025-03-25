import { getGalleryMedia } from "../_utils/gallery";
import SFXLink from "../_components/SFXLink";
import MediaLoader from "../_components/MediaLoader";
import BackButton from "../_components/BackButton";

export default async function GalleryPage() {
	const media = await getGalleryMedia("gallery");

	return (
		<div className="min-h-screen p-4 md:p-8 relative pb-20 text-center">
			<div className="max-w-6xl mx-auto">
				<h1 className="relative font-sangsang text-4xl md:text-5xl text-pink-600 mt-8 mb-16">
					Personal Artworks
					<img
						src="/svgs/textbox.png" // Replace with actual image path
						alt="Commissioned Artwork Banner"
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] max-w-full h-auto opacity-60"
					/>
				</h1>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{media.map((item, index) => (
						<SFXLink
							key={index}
							href={`https://www.instagram.com/p/${item.name}/`}
							target="_blank"
							rel="noopener noreferrer"
							className="relative aspect-square block overflow-hidden rounded-lg hover:scale-105 transition-transform"
						>
							<MediaLoader
								src={item.src}
								type={item.type as "image" | "video"}
							/>
						</SFXLink>
					))}
				</div>

				<div className="mt-16">
					<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
						<BackButton />
					</div>
				</div>
			</div>
		</div>
	);
}
