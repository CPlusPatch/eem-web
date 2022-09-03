import Head from "next/head";
import Image from "next/future/image";
import Navbar from "components/Navbar";
import PopularProducts from "components/PopularProducts";

export default function Home() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_PROJECT_NAME}</title>
				<meta
					name="description"
					content={process.env.PROJECT_DESCRIPTION}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="mb-16">
				<Navbar />
			</header>
			<main className="grid gap-y-10">
				<section className="grid mx-auto">
					<div className="w-full h-[80vh] overflow-hidden relative max-w-[90rem]">
						<Image
							src={require("public/assets/hero-1.jpg")}
							alt=""
							className="object-cover object-center h-full bg-fixed"
						/>
						<div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-gray-900/60">
							<h1 className="mb-4 font-serif text-6xl text-white lowercase">
								Ateliers de reliure artisanale
							</h1>
							<h3 className="font-serif text-2xl font-bold text-white lowercase">
								papeterie fine, création de livre sur mesure et
								plus encore!
							</h3>
						</div>
					</div>
				</section>

				<section>
					<div className="relative w-screen h-screen overflow-hidden lg:h-[60vh]">
						<Image
							src={require("public/assets/hero-2.jpeg")}
							alt=""
							className="object-cover object-center h-full bg-fixed"
						/>
						<div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-end justify-center bg-gray-900/60">
							<div className="w-full pr-4 text-right md:pr-12 lg:pr-32 md:w-3/5">
								<h1 className="mb-8 font-serif text-6xl font-bold leading-relaxed text-white">
									Découvrez notre herbier de conservation
								</h1>
								<h3 className="mb-8 font-serif text-2xl font-bold text-white lowercase">
									pour tout les amoureux des plantes!
								</h3>
								<button className="font-serif bg-[#e2bda7] rounded-full px-9 py-7 hover:scale-105 duration-200">
									Découvrir
								</button>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="max-w-6xl mx-auto">
						<h2 className="w-full mb-8 font-serif text-4xl text-center uppercase">Produits populaires</h2>
						<PopularProducts/>
					</div>
				</section>
			</main>
		</>
	);
}
