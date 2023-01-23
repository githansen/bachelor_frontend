
function Info() {
	return (
		<div>
			<h1 className="text-2xl font-semibold text-marine-dark">Klar til opptak?</h1>
			<p className="max-w-md text-sm">
				Her skal du lese opp teksten i bosken under og spille inn lyden. 
				Uttal ordene så tydelig som mulig men husk å være deg selv. 
			</p>
		</div>
	);
}

function Controls() {
	return (
		<div>
			<button className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 mr-2">
				Ny tekst
			</button>
			<button className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 mr-2">
				Start opptak
			</button>
		</div>
	);
}

function TextPanel() {
	return (
		<div className="border-gray-300 bg-gray-200 text-xl font-semibold p-16 text-center border-2">
			Uten hensyn til en prosentvis sikkerhetsforskrift påvirkes betingelsene hva gjelder oppgjøret. Under forutsetning av en offensiv konflikthåndtering realiseres trusselbildet med hensyn til styrkedisponeringen.
		</div>
	);
}

export default function Reader() {
	return (
		<div className="w-[800px] mx-auto mt-14">
			<div className="flex justify-between mb-4">
				<Info />
				<Controls />
			</div>
			<TextPanel />
		</div>
	);
}
