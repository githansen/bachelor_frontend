import { useState } from 'react';
import DemoLydFil from '../assets/soundtracks/demoSoundTrack.mp3';
import HeaderMinimal from '../components/shared/HeaderMinimal';
import { useNavigate } from 'react-router-dom';

// Buttons in top right for recording, playing, submitting, etc.
function Controls({ state, setState, time=null }) {
	const navigate = useNavigate();
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


	const [recordingTxt, setRecordingTxt] = useState('Tar opp lyd...');
	const askToStop = event => {
		setRecordingTxt('Stopp opptak?')
	};
	const defaultRecordingTxt = event => {
		setRecordingTxt('Tar opp lyd...')
	};

	switch (state) {
		case 'completed':
			return (
				<div className='flex flex-row justify-between w-full'>
					<div className='text-left self-center flex flex-col'>
						<h3 className="text-h3 font-semibold text-white">
							Det høres bra ut!
						</h3>
						<p className="text-p text-secondary">
							Hør på ditt lydklipp
						</p>
					</div>

					<div className='text-left self-center flex flex-col'>
						<div className='min-w-[40rem]'>
							<audio className='w-full' src={DemoLydFil} controls controlsList="nodownload"/>
						</div>
					</div>

					<div className='flex flex-row place-items-center self-center gap-5'>
						<div>
							<button className="px-3 py-2 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-white text-black border-light hover:bg-primary hover:text-white" onClick={() => setState('recording')}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
								</svg>
								Prøv igjen
							</button>
						</div>
						<div>
							<button
								onClick={() => navigate('/takk')}
								className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft"
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
								</svg>
								<b>Send inn!</b>
							</button>
						</div>
					</div>
				</div>
			);

		case 'recording':
			return (
				<div className="flex flex-row self-center">
					<div>
						{time !== null && (<span className="text-h4 font-semibold px-4 py-2 mr-2">
						{formatTime(time)}
						</span>)}
						<button className={`${recordingTxt == 'Stopp opptak?' ? '' : 'animate-pulse'} px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full text-dark bg-secondary-soft border-secondary hover:bg-red hover:border-red hover:text-white`} onMouseEnter={askToStop} onMouseLeave={defaultRecordingTxt} onClick={() => {setState('completed'); defaultRecordingTxt();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
							</svg>
							<b>{recordingTxt}</b>
						</button>
					</div>
				</div>
			);

		case 'idle':
		default:
			return (
				<div className='flex flex-row justify-between w-full'>
					<div className='text-left self-center flex flex-col'>
						<h3 className="text-h3 font-semibold text-white">
							Klar til opptak?
						</h3>
						<p className="text-p text-secondary">
							Estimert lesetid: 2 min
						</p>
					</div>
					
					<div className='flex flex-row place-items-center self-center gap-5'>
						<div>
							<button className="px-4 py-2 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-white text-black border-light hover:bg-primary hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
								</svg>
								Ny tekst
							</button>
						</div>
						<div>
							<button className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft" onClick={() => setState('recording')}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
								</svg>
								<b>Start opptak</b>
							</button>
						</div>
					</div>
				</div>
			);
	}
}




// Main text to be read by user
function TextPanel({ state, statess }) {
	const [fontsize, setFontsize] = useState(18);
	const [fontfamily, setFontfamily] = useState('Arial');
	const [stylecolor, setStyleColor] = useState('#ffefb6');
	const [stylecolorfont, setStyleColorFont] = useState('#000');
	const [stylecolorborder, setStyleColorBorder] = useState('#FFD039');


	const changeSizeBigger = event => {
		if (fontsize >= 20){
			setFontsize(20)
		} else{
			setFontsize(fontsize + 1)
		}
	};
	const changeSizeSmaller = event => {
		if (fontsize <= 16){
			setFontsize(16)
		} else{
			setFontsize(fontsize - 1)
		}
	};
	const changeStyleColor = event => {
		if (stylecolor == '#171717'){
			setStyleColor('#ffefb6');
			setStyleColorFont('#000');
			setStyleColorBorder('#FFD039');
		}
		if (stylecolor == '#ffefb6'){
			setStyleColor('#171717');
			setStyleColorFont('#ffffff');
			setStyleColorBorder('#000000');
		}
	};


	const bgColor = {
		idle: `${stylecolor}`,
		recording: `${stylecolor}`,
		completed: '#f2f2f2',
	}[state];
	const txtColor = {
		idle: `${stylecolorfont}`,
		recording: `${stylecolorfont}`,
		completed: `#c2c2c2`,
	}[state];
	const borderColor = {
		idle: `${stylecolorborder}`,
		recording: `${stylecolorborder}`,
		completed: `#c2c2c2`,
	}[state];


	return (
		<div>
			<div style={{ fontSize: `${fontsize}px`, fontFamily: `${fontfamily}`, backgroundColor: `${bgColor}`, color: `${txtColor}`, borderColor: `${borderColor}` }} className={`rounded-lg leading-loose p-8 border-2 transition-colors duration-400`}>
				"Vedrørende en avtagende oppgaveløsning utvides scenarioet som en følge av beskaffenheten. Med tanke på en tiltagende 
				mobilitet ivaretas oppfølgingen i tillegg til visjonen. Avhengig av en særlig avklaring genereres kompetansehevingen i 
				forhold til evalueringen. I lys av en bærekraftig måloppnåelse tilgjengeliggjøres synergieffekten avhengig av evalueringen.
				Sammenholdt med en proaktiv ressursbruk realiseres informasjonsflyten i relasjon til problemstillingen. I henhold til en 
				proaktiv styringsinnsats maksimeres spisskompetansen hva angår resultatoppnåelsen. Med tanke på en særlig styringsinnsats 
				utvides kompetansehevingen hva angår en samlet vurdering. Under henvisning til en helhetlig struktur styrkes tilstedeværelsen 
				hva gjelder ressursinnsatsen. Med tanke på en proaktiv målsetting iverksettes strategien i motsetning til løsningen. Forutsatt 
				en integrert overveielse innhentes oppfølgingen i tillegg til målområdet. I lys av en implisitt organisasjon lokaliseres 
				incitamentet hva gjelder målområdet. Under hensyntagen til en langsiktig kvalitetssikring stabiliseres potensialet i forlengelsen 
				av egenarten. Under henvisning til en bærekraftig avklaring revitaliseres forankringen utenom resultatoppnåelsen. I betraktning 
				av en kostnadseffektiv avveining utvides potensialet med sikte på evalueringen. Gitt en ikke ubetydelig kvalitetssikring 
				stimuleres scenarioet eller sagt på en annen måte: realitetsorienteringen. På grunnlag av en tiltagende effektivisering 
				maksimeres scenarioet i motsetning til problemstillingen. I forhold til en bærekraftig ressursbruk spores relasjonene i relasjon 
				til ressursinnsatsen."
			</div>

			<div className='mt-5 flex flex-row justify-between w-full '>
				<div className='flex'>
					<div className="flex items-center justify-center">
						<label 
							htmlFor="toogle"
							className="flex items-center cursor-pointer"
						>
							<div className="relative">
							<input id="toogle" type="checkbox" className="sr-only" onClick={changeStyleColor}/>
							<div className="w-10 h-4 bg-secondary-soft rounded-full shadow-inner"></div>
							<div className="dot absolute w-6 h-6 bg-secondary rounded-full shadow -left-1 -top-1 transition"></div>
							</div>
							<div className="ml-3 text-gray-700 text-btnsmall">
								Farge
							</div>
						</label>
					</div>
				</div>
				<div className='flex gap-2'>
					<button 
						onClick={() => setFontfamily('Arial')}
						style={{ fontFamily: 'Arial'}}
						className={`px-5 font-bold text-btnsmall py-2 justify-center ${fontfamily == 'Arial' ? 'bg-secondary-soft' : 'bg-white'} text-center text-black rounded inline-flex border- border-gray hover:bg-secondary-soft hover:border-secondary`}
					>
						Arial
					</button>
					<button 
						onClick={() => setFontfamily('Verdana')}
						style={{ fontFamily: 'Verdana'}}
						className={`px-5 font-bold text-btnsmall py-2 justify-center ${fontfamily == 'Verdana' ? 'bg-secondary-soft' : 'bg-white'} text-center text-black rounded inline-flex border-1 border-gray hover:bg-secondary-soft hover:border-secondary`}
					>
						Verdana
					</button>
					<button 
						onClick={() => setFontfamily('Times New Roman')}
						style={{ fontFamily: 'Times New Roman'}}
						className={`px-5 font-bold text-btnsmall py-2 justify-center ${fontfamily == 'Times New Roman' ? 'bg-secondary-soft' : 'bg-white'} text-center text-black rounded inline-flex border- border-gray hover:bg-secondary-soft hover:border-secondary`}
					>
						Times New Roman
					</button>
					<button 
						onClick={changeSizeBigger}
						className="bg-white text-btnsmall px-5 py-4 justify-center text-center text-black rounded inline-flex border-light hover:bg-secondary-soft hover:border-secondary"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
					<button 
						onClick={changeSizeSmaller}
						className="bg-white text-btnsmall px-5 py-4 justify-center text-center text-black rounded inline-flex border-light hover:bg-secondary-soft hover:border-secondary"
					>				
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
						</svg>
					</button>
					<button 
						onClick={() => {setFontsize(18); setFontfamily('Arial')}}
						className="bg-white text-btnsmall px-5 py-4 justify-center text-center text-black rounded inline-flex border-light hover:bg-secondary-soft hover:border-secondary"
					>		
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		
	);
}

// Stateful wrapping component
//shadow-playerShadow
export default function Reader() {
	const [state, setState] = useState('idle'); // idle | recording | completed
	// TODO: make useTimer hook
	const [time, setTime] = useState(168);

	return (
		<div className='mx-auto max-w-screen-xl'>
			<HeaderMinimal />
			
			<div className='min-h-screen my-20 flex flex-col place-items-center'>
				<div className="mx-auto">
					<TextPanel state={state}  />
				</div>
			</div>
			
			
			<footer
			className="bg-dark
					text-white 
					text-center
					fixed
					inset-x-0
					bottom-0
					p-5">
				
				<div className="h-30 flex justify-center ">
					<Controls state={state} setState={setState} time={time} />
				</div>
			</footer>
		</div>
	);
}
