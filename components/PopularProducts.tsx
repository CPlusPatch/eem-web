const products = [
	{
		name: "Carnet de notes A5 à lignes arbres",
		price: 27.0,
		image: "https://boutique.latelier-reliure.com/24-home_default/carnet-de-notes-a5-a-lignes-arbres.jpg",
	},
	{
		name: "Carnet de croquis format paysage A5 paon",
		price: 33.0,
		image: "https://boutique.latelier-reliure.com/108-home_default/carnet-de-croquis-paysage-a5-paon.jpg",
	},
	{
		name: "Carnet A5 en liège grandes feuilles",
		price: 35.0,
		image: "https://boutique.latelier-reliure.com/31-home_default/carnet-a5-en-liege-grandes-feuilles.jpg",
	},
	{
		name: "Album photos A5 - Angèle",
		price: 37.0,
		image: "https://boutique.latelier-reliure.com/39-home_default/album-photos-a5-angele.jpg",
	},
	{
		name: "Carnet de notes A5 à lignes arbres",
		price: 27.0,
		image: "https://boutique.latelier-reliure.com/24-home_default/carnet-de-notes-a5-a-lignes-arbres.jpg",
	},
	{
		name: "Carnet de croquis format paysage A5 paon",
		price: 33.0,
		image: "https://boutique.latelier-reliure.com/108-home_default/carnet-de-croquis-paysage-a5-paon.jpg",
	},
	{
		name: "Carnet A5 en liège grandes feuilles",
		price: 35.0,
		image: "https://boutique.latelier-reliure.com/31-home_default/carnet-a5-en-liege-grandes-feuilles.jpg",
	},
	{
		name: "Album photos A5 - Angèle",
		price: 37.0,
		image: "https://boutique.latelier-reliure.com/39-home_default/album-photos-a5-angele.jpg",
	},
];

export default function PopularProducts() {
	return (
		<div className="grid justify-between grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-96">
			{products.map((product) => (
				<article
					// eslint-disable-next-line react/no-unknown-property
					key={product.name}
					className="w-64 h-auto overflow-hidden duration-200 shadow-md hover:scale-105 hover:rotate-1">
					<a className="block">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={product.image}
							alt=""
							loading="lazy"
							className="object-cover object-center w-full h-full"
						/>
					</a>
					<div className="w-full p-3 bg-white">
						<h3 className="text-sm text-center capitalize text-[#7a7a7a] whitespace-nowrap overflow-ellipsis overflow-hidden px-4">
							{product.name}
						</h3>
						<div className="text-center text-[#232323] w-full text-lg">
							{Intl.NumberFormat("fr-FR", {
								style: "currency",
								currency: "EUR",
							}).format(product.price)}
						</div>
					</div>
				</article>
			))}
		</div>
	);
}
