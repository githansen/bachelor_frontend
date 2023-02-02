import { useEffect, useState } from 'react';
import DemoSoundtrack from '@/assets/soundtracks/demoSoundTrack.mp3';
import HeaderMinimal from '@/components/shared/HeaderMinimal';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import '@/styles/audioplayer.css';
import { useTimer } from 'use-timer';
import { Popover } from '@headlessui/react';
import { ReactComponent as IconTextOptions } from '@/assets/icons/IconTextOptions.svg';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as IconRetry } from '@/assets/icons/IconRetry.svg';
import { ReactComponent as IconPaperPlane } from '@/assets/icons/IconPaperPlane.svg';
import { ReactComponent as IconRefresh } from '@/assets/icons/IconRefresh.svg';
import RetryModal from './RetryModal';
import TextSettings from './TextSettings';
import ResetModal from './ResetModal';

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Buttons in footer for recording, playing, submitting, etc.
function Controls({
    state,
    setState,
    setStyleBgColor,
    stylecolorfont,
    setStyleColorFont,
    setFontSize,
    fontFamily,
    setFontFamily,
    alignText,
    setAlignText,
    time = null,
}) {
    //Navigation
    const navigate = useNavigate();

    //Recording
    const [recordingText, setRecordingText] = useState('Tar opp lyd...');
    const askToStop = () => {
        setRecordingText('Stopp opptak?');
    };
    const resetRecordingText = () => {
        setRecordingText('Tar opp lyd...');
    };

    // Prøv igjen modal
    let [retryModalOpen, setRetryModalOpen] = useState(false);
    // Ny tekst modal
    let [resetModalOpen, setResetModalOpen] = useState(false);

    //Switch between Dark/Light theme
    const changeStyleColor = () => {
        if (stylecolorfont == '#ffffff') {
            setStyleColorFont('#000000');
            setStyleBgColor('bg-special-light');
        }
        if (stylecolorfont == '#000000') {
            setStyleColorFont('#ffffff');
            setStyleBgColor('bg-special-dark');
        }
    };

    switch (state) {
        case 'completed':
            return (
                <div className="flex flex-row justify-between w-full">
                    <div className="text-left self-center flex flex-col">
                        <h3 className="text-h3 font-semibold text-white">
                            Det høres bra ut!
                        </h3>
                        <p className="text-p text-secondary">
                            Hør på lydklippet ditt
                        </p>
                    </div>

                    <div className="text-left self-center flex flex-col">
                        <div className="min-w-[40rem]">
                            <AudioPlayer
                                className="w-full"
                                src={DemoSoundtrack}
                                showFilledVolume={true}
                                showJumpControls={false}
                                customControlsSection={[
                                    'MAIN_CONTROLS',
                                    'VOLUME_CONTROLS',
                                ]}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row place-items-center self-center gap-5">
                        <button
                            type="button"
                            onClick={() => setRetryModalOpen(true)}
                            className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out"
                        >
                            <IconRetry />
                            Prøv igjen
                        </button>

                        <RetryModal
                            open={retryModalOpen}
                            onClose={() => setRetryModalOpen(false)}
                            onRetry={() => {
                                setRetryModalOpen(false);
                                setState('recording');
                            }}
                        />
                        <button
                            onClick={() => navigate('/takk')}
                            className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft"
                        >
                            <IconPaperPlane />
                            <b>Send inn!</b>
                        </button>
                    </div>
                </div>
            );

        case 'recording':
            return (
                <div className="flex flex-row self-center">
                    <div className="flex flex-row ">
                        <div className="flex flex-row align-center mr-3">
                            {time !== null && (
                                <div className="flex self-center">
                                    <h4 className="text-h4 font-semibold pr-2 py-2">
                                        {formatTime(time)}
                                    </h4>
                                </div>
                            )}
                            <div className="flex self-center">
                                <div className="h-5 w-5 rounded-full bg-red animate-pulse"></div>
                            </div>
                        </div>
                        <div className="w-[14rem]">
                            <button
                                className={`px-5 py-4 font-bold inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full text-dark bg-secondary-soft border-secondary hover:bg-red hover:border-red hover:text-white`}
                                onMouseEnter={askToStop}
                                onMouseLeave={resetRecordingText}
                                onClick={() => {
                                    setState(() => 'completed');
                                    resetRecordingText();
                                }}
                            >
                                <IconMic className="w-6 h-6" />
                                {recordingText}
                            </button>
                        </div>
                    </div>
                </div>
            );

        case 'idle':
        default:
            return (
                <div className="flex flex-row justify-between w-full trasition">
                    <div className="text-left self-center flex flex-col">
                        <h3 className="text-h3 font-semibold text-white">
                            Klar til opptak?
                        </h3>
                        <p className="text-p text-secondary">
                            Estimert lesetid: 2 min
                        </p>
                    </div>

                    <div className="flex flex-row place-items-center self-center">
                        <button
                            className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft  transition duration-150 ease-in-out"
                            onClick={() => setState('recording')}
                        >
                            <IconMic className="w-6 h-6" />
                            <b>Start opptak</b>
                        </button>
                    </div>

                    <div className="flex flex-row place-items-center self-center gap-4">
                        <div className="mr-2">
                            <label
                                htmlFor="toogle"
                                className="flex items-center cursor-pointer"
                            >
                                <div className="relative">
                                    <input
                                        id="toogle"
                                        type="checkbox"
                                        className="sr-only"
                                        onClick={changeStyleColor}
                                    />
                                    <div className="w-10 h-4 bg-secondary-soft rounded-full shadow-inner"></div>
                                    <div className="dot absolute w-6 h-6 bg-secondary rounded-full shadow -left-1 -top-1 transition"></div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            type="button"
                                            className={`px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out`}
                                        >
                                            <IconTextOptions className="w-6 h-6" />
                                            Endre tekst
                                        </Popover.Button>
                                        <TextSettings
                                            fontFamily={fontFamily}
                                            setFontFamily={setFontFamily}
                                            setFontSize={setFontSize}
                                            alignText={alignText}
                                            setAlignText={setAlignText}
                                        />
                                    </>
                                )}
                            </Popover>
                        </div>

                        <div>
                            <button
                                onClick={() => setResetModalOpen(true)}
                                className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out"
                            >
                                <IconRefresh className="w-6 h-6" />
                                Ny tekst
                            </button>
                        </div>
                    </div>
                    <ResetModal
                        open={resetModalOpen}
                        onClose={() => setResetModalOpen(false)}
                        onReset={() => {
                            /* TODO: Not implemented yet */
                        }}
                    />
                </div>
            );
    }
}

// Main text to be read by user
function TextPanel({ state, fontColor, fontsize, fontfamily, alignText }) {
    const txtColor = {
        idle: `${fontColor}`,
        recording: `${fontColor}`,
        completed: `${fontColor}`,
    }[state];

    return (
        <div>
            <div
                style={{
                    fontSize: `${fontsize}px`,
                    fontFamily: `${fontfamily}`,
                    color: `${txtColor}`,
                    textAlign: `${alignText}`,
                }}
                className={`rounded-lg leading-loose p-8 bordser-2 transition-colors text-justify duration-400`}
            >
                "Vedrørende en avtagende oppgaveløsning utvides scenarioet som
                en følge av beskaffenheten. Med tanke på en tiltagende mobilitet
                ivaretas oppfølgingen i tillegg til visjonen. Avhengig av en
                særlig avklaring genereres kompetansehevingen i forhold til
                evalueringen. I lys av en bærekraftig måloppnåelse
                tilgjengeliggjøres synergieffekten avhengig av evalueringen.
                Sammenholdt med en proaktiv ressursbruk realiseres
                informasjonsflyten i relasjon til problemstillingen. I henhold
                til en proaktiv styringsinnsats maksimeres spisskompetansen hva
                angår resultatoppnåelsen. Med tanke på en særlig styringsinnsats
                utvides kompetansehevingen hva angår en samlet vurdering. Under
                henvisning til en helhetlig struktur styrkes tilstedeværelsen
                hva gjelder ressursinnsatsen. Med tanke på en proaktiv
                målsetting iverksettes strategien i motsetning til løsningen.
                Forutsatt en integrert overveielse innhentes oppfølgingen i
                tillegg til målområdet. I lys av en implisitt organisasjon
                lokaliseres incitamentet hva gjelder målområdet. Under
                hensyntagen til en langsiktig kvalitetssikring stabiliseres
                potensialet i forlengelsen av egenarten. Under henvisning til en
                bærekraftig avklaring revitaliseres forankringen utenom
                resultatoppnåelsen. I betraktning av en kostnadseffektiv
                avveining utvides potensialet med sikte på evalueringen. Gitt en
                ikke ubetydelig kvalitetssikring stimuleres scenarioet eller
                sagt på en annen måte: realitetsorienteringen. På grunnlag av en
                tiltagende effektivisering maksimeres scenarioet i motsetning
                til problemstillingen. I forhold til en bærekraftig ressursbruk
                spores relasjonene i relasjon til ressursinnsatsen."
            </div>
        </div>
    );
}

// Stateful wrapping component
export default function Reader() {
    // Recording
    const [state, setState] = useState('idle'); // idle | recording | completed
    const { time, start, reset } = useTimer();

    // Switch light/dark theme
    const [stylebgcolor, setStyleBgColor] = useState('bg-special-light');
    const [stylecolorfont, setStyleColorFont] = useState('#000000');

    // TextEdit
    const [fontsize, setFontSize] = useState(24);
    const [fontfamily, setFontFamily] = useState('Avenir');
    const [alignText, setAlignText] = useState('justify');

    // Record when state enters recording
    useEffect(() => {
        if (state === 'recording') {
            start();
        } else {
            reset();
        }
    }, [state]);

    return (
        <div className={`${stylebgcolor} px-10`}>
            <HeaderMinimal />
            <div className="min-h-screen px-10 pt-0 pb-20 flex flex-col place-items-center">
                <div className="mx-auto">
                    <TextPanel
                        state={state}
                        fontColor={stylecolorfont}
                        fontsize={fontsize}
                        fontfamily={fontfamily}
                        alignText={alignText}
                    />
                </div>
            </div>

            <footer
                className="bg-dark
					text-white 
					text-center
					fixed
					inset-x-0
					bottom-0
					p-5"
            >
                <div className="h-30 flex justify-center ">
                    <Controls
                        state={state}
                        setState={setState}
                        setStyleBgColor={setStyleBgColor}
                        stylecolorfont={stylecolorfont}
                        setStyleColorFont={setStyleColorFont}
                        setFontSize={setFontSize}
                        setFontFamily={setFontFamily}
                        alignText={alignText}
                        setAlignText={setAlignText}
                        time={time}
                    />
                </div>
            </footer>
        </div>
    );
}
