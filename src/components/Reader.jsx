import { useState } from 'react';

function Info({ state }) {
	const heading = {
		idle: 'Klar til opptak?',
		recording: 'Les opp teksten under',
		completed: 'Bra jobbet!',
	}[state];

	const infoText = {
		idle: 'Her skal du lese opp teksten i bosken under og spille inn lyden. Uttal ordene så tydelig som mulig men husk å være deg selv.',
		recording: '',
		completed: 'Da er din innspilling ferdig. Nå kan du velge om du vil høre ditt opptak, prøve på nytt eller sende inn til oss!',
	}[state];

	return (
		<div>
			<h1 className="text-2xl font-semibold text-marine-dark">
				{heading}
			</h1>
			{infoText && (<p className="max-w-md text-sm">
				{infoText}
			</p>)}
		</div>
	);
}

function Controls({ state, setState }) {
	return (
		<div>
			<button className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 mr-2 hover:border-marine-dark">
				Ny tekst
			</button>
			<button
				onClick={() => setState('recording')}
				className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 mr-2 hover:border-marine-dark"
			>
				Start opptak
			</button>
		</div>
	);
}

function TextPanel({ state }) {
	return (
		<div className={`text-2xl font-semibold p-16 text-center border-2 ${state === 'recording' ? 'bg-yellow-300 border-yellow-500' : 'bg-gray-200 border-gray-300'}`}>
			Uten hensyn til en prosentvis sikkerhetsforskrift påvirkes betingelsene hva gjelder oppgjøret. Under forutsetning av en offensiv konflikthåndtering realiseres trusselbildet med hensyn til styrkedisponeringen.
		</div>
	);
}

export default function Reader() {
	const [state, setState] = useState('idle'); // idle | recording | completed

	return (
		<div className="w-[800px] mx-auto mt-14">
			<div className="flex justify-between mb-4">
				<Info state={state} />
				<Controls state={state} setState={setState} />
			</div>
			<TextPanel state={state} />
		</div>
	);
}
