import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Search } from "react-bootstrap-icons";

const navigation = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/blog",
		label: "Blog",
	},
];

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>{process.env.PROJECT_NAME}</title>
				<meta
					name="description"
					content={process.env.PROJECT_DESCRIPTION}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header>
					<nav className="shadow-sm bg-white">
						<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
							<div className="flex justify-between h-20">
								<div className="flex-shrink-0 flex items-center">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										className="block h-8 w-auto"
										src="https://boutique.latelier-reliure.com/img/logo-1635693277.jpg"
										alt="Logo"
									/>
								</div>
								<div className="mx-auto flex px-2 lg:px-0">
									<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
										{navigation.map((item) => (
											<Link
												key={item.label}
												href={item.href}
												prefetch={false}>
												<a className="duration-300 text-gray-600 uppercase inline-flex items-center text-xl px-1 pt-1 font-medium hover:text-cyan-500">
													{item.label}
												</a>
											</Link>
										))}
									</div>
								</div>
								<div className="flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
									<div className="max-w-lg w-full lg:max-w-xs">
										<label
											htmlFor="search"
											className="sr-only">
											Search
										</label>
										<div className="relative">
											<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
												<Search
													className="h-4 w-4 text-gray-400"
													aria-hidden={true}
												/>
											</div>
											<input
												id="search"
												name="search"
												className="w-full pl-10 pr-3 rounded-md py-2 shadow-sm leading-5 bg-gray-200 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
												placeholder="Rechercher"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</main>
		</div>
	);
}
