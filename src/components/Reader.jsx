import { useState } from 'react';

// Heading and text info in top left
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

// Buttons in top right for recording, playing, submitting, etc.
function Controls({ state, setState, time=null }) {
	// TODO: Add functionality to following buttons:
	// * Ny tekst
	// * Hør på opptaket
	// * Prøv på nytt
	// * Send inn

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	switch (state) {
		case 'recording':
			return (
				<div>
					{time !== null && (<span className="border-2 border-gray-300 font-semibold px-4 py-2 mr-2">
						{formatTime(time)} • Tar opp lyd
					</span>)}
					<button
						onClick={() => setState('completed')}
						className="bg-green-400 text-white border-2 border-green-400 font-semibold px-4 py-2 hover:border-marine-dark"
					>
						Done
					</button>
				</div>
			);

		case 'completed':
			return (
				<div className="flex">
					<div className="flex flex-col gap-1">
						<button className="text-blue-400 border-2 border-gray-300 text-sm font-semibold px-2 py-1 mr-2 hover:border-marine-dark">
							Hør på opptaket
						</button>
						<button className="text-sm border-2 border-gray-300 font-semibold px-2 py-1 mr-2 hover:border-marine-dark">
							Prøv på nytt
						</button>
					</div>
					<button className="bg-blue-500 text-white border-2 border-blue-500 font-semibold px-4 py-2 mr-2 hover:border-marine-dark">
						Send inn!
					</button>
				</div>
			);

		case 'idle':
		default:
			return (
				<div>
					<button className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 mr-2 hover:border-marine-dark">
						Ny tekst
					</button>
					<button
						onClick={() => setState('recording')}
						className="bg-gray-200 border-2 border-gray-300 font-semibold px-4 py-2 hover:border-marine-dark"
					>
						Start opptak
					</button>
				</div>
			);
	}
}

// Main text to be read by user
function TextPanel({ state }) {
	const colors = {
		idle: 'bg-gray-200 border-gray-300',
		recording: 'bg-yellow-300 border-yellow-500',
		completed: 'bg-gray-200 border-gray-200 text-gray-300',
	}[state];

	return (
		<div className={`text-2xl font-semibold p-16 text-center border-2 transition-colors duration-200 ${colors}`}>
			Uten hensyn til en prosentvis sikkerhetsforskrift påvirkes betingelsene hva gjelder oppgjøret. Under forutsetning av en offensiv konflikthåndtering realiseres trusselbildet med hensyn til styrkedisponeringen.
		</div>
	);
}

// Stateful wrapping component
export default function Reader() {
	const [state, setState] = useState('idle'); // idle | recording | completed
	// TODO: make useTimer hook
	const [time, setTime] = useState(168);

	return (
		<div className="w-[800px] mx-auto mt-14">
			<div className="h-20 flex justify-between mb-4">
				<Info state={state} />
				<Controls state={state} setState={setState} time={time} />
			</div>
			<TextPanel state={state} />
		</div>
	);
}
