import Link from "next/link";
import { Search } from "react-bootstrap-icons";

const navigation = [
	{
		href: "/",
		label: "Agendas",
	},
	{
		href: "/blog",
		label: "Albums Photos",
	},
	{
		href: "/about",
		label: "Artistes",
	},
	{
		href: "/contact",
		label: "Bullet Journal",
	}
];

export default function Navbar() {
	return (
		<nav className="fixed top-0 z-20 w-full bg-white shadow-sm">
			<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center flex-shrink-0">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							className="block w-auto h-8"
							src="https://boutique.latelier-reliure.com/img/logo-1635693277.jpg"
							alt="Logo"
						/>
					</div>
					<div className="flex px-2 mx-auto lg:px-0">
						<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
							{navigation.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									prefetch={false}>
									<a className="inline-flex items-center px-1 pt-1 text-xl font-light text-gray-600 uppercase duration-300 hover:text-cyan-500">
										{item.label}
									</a>
								</Link>
							))}
						</div>
					</div>
					<div className="flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
						<div className="w-full max-w-lg lg:max-w-xs">
							<label htmlFor="search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<Search
										className="w-4 h-4 text-gray-400"
										aria-hidden={true}
									/>
								</div>
								<input
									id="search"
									name="search"
									className="w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 duration-300 bg-gray-200 rounded-md shadow-sm outline-none focus:outline-none focus:placeholder-gray-400 sm:text-sm"
									placeholder="Rechercher"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
