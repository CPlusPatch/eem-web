import Head from "next/head";
import Image from "next/future/image";
import Navbar from "components/Navbar";
import { Parallax } from "react-scroll-parallax";

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
					<div className="w-full h-[80vh] overflow-hidden relative">
						<Image
							src={require("public/assets/hero-1.jpg")}
							alt=""
							className="object-cover object-center h-full bg-fixed"
						/>
						<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-900/40">
							<h1 className="font-serif text-6xl text-white lowercase text">Ateliers de reliure artisanale</h1>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
