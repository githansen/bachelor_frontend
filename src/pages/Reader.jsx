import { useEffect, useState, Fragment } from 'react';
import DemoLydFil from '../assets/soundtracks/demoSoundTrack.mp3';
import HeaderMinimal from '../components/shared/HeaderMinimal';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import '@/styles/audioplayer.css';
import { useTimer } from 'use-timer';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { ReactComponent as IconTextOptions } from '@/assets/icons/IconTextOptions.svg';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as IconRetry } from '@/assets/icons/IconRetry.svg';
import { ReactComponent as IconPaperPlane } from '@/assets/icons/IconPaperPlane.svg';
import { ReactComponent as IconLeftTextAlign } from '@/assets/icons/IconLeftTextAlign.svg';
import { ReactComponent as IconJustifyTextAlign } from '@/assets/icons/IconJustifyTextAlign.svg';
import { ReactComponent as IconRightTextAlign } from '@/assets/icons/IconRightTextAlign.svg';
import { ReactComponent as IconCenterTextAlign } from '@/assets/icons/IconCenterTextAlign.svg';
import { ReactComponent as IconMonospaceFont } from '@/assets/icons/IconMonospaceFont.svg';
import { ReactComponent as IconSansSerifFont } from '@/assets/icons/IconSansSerifFont.svg';
import { ReactComponent as IconSerifFont } from '@/assets/icons/IconSerifFont.svg';
import { ReactComponent as IconStandardFont } from '@/assets/icons/IconStandardFont.svg';
import { ReactComponent as IconBigText } from '@/assets/icons/IconBigText.svg';
import { ReactComponent as IconSmallText } from '@/assets/icons/IconSmallText.svg';
import { ReactComponent as IconRefresh } from '@/assets/icons/IconRefresh.svg';
import { ReactComponent as IconTextSizeRefresh } from '@/assets/icons/IconTextSizeRefresh.svg';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

function RetryModal({ open, onClose, onRetry }) {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-90" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-14 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md text-center transform overflow-hidden rounded-lg bg-white p-14 align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-h4 font-medium"
                                >
                                    Er du sikker på at du vil starte opptaket på
                                    nytt?
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-p text-gray-500">
                                        Merk at det du har spilt inn vil bli
                                        slettet.
                                    </p>
                                </div>

                                <div className="mt-5 grid place-content-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="transScale uppercase bg-secondary px-4 py-4 font-bold text-p text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                                    >
                                        Avbryt
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onRetry}
                                        className="bg-light px-5 text-small py-3 mt-2 font-medium text-black rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
                                    >
                                        Start opptak på nytt
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

// Buttons in footer for recording, playing, submitting, etc.
function Controls({
    state,
    setState,
    setStyleBgColor,
    stylecolorfont,
    setStyleColorFont,
    setFontsize,
    fontfamily,
    setFontfamily,
    alignText,
    setAlignText,
    time = null,
}) {
    //Navigation
    const navigate = useNavigate();

    //Recording
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    const [recordingText, setRecordingText] = useState('Tar opp lyd...');
    const askToStop = () => {
        setRecordingText('Stopp opptak?');
    };
    const resetRecordingText = () => {
        setRecordingText('Tar opp lyd...');
    };

    //Modal
    let [isOpenOne, setIsOpenOne] = useState(false);
    function closeModalOne() {
        setIsOpenOne(false);
    }
    function openModalOne() {
        setIsOpenOne(true);
    }
    let [isOpenTwo, setIsOpenTwo] = useState(false);
    function closeModalTwo() {
        setIsOpenTwo(false);
    }
    function openModalTwo() {
        setIsOpenTwo(true);
    }

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

    //ModalRelatert (On Close)
    const closeModalReturnToRecording = () => {
        closeModalOne();
        setState('recording');
    };

    //TextEdit
    const changeSizeBigger = () => {
        // Increment fontsize by one, capped at 28
        setFontsize((prevSize) => Math.min(prevSize + 1, 28));
    };
    const changeSizeSmaller = () => {
        setFontsize((prevSize) => Math.max(prevSize - 1, 24));
    };

    const textAlign = [
        {
            name: 'Fyll',
            alignTextChosen: 'justify',
            icon: IconJustifyTextAlign,
        },
        {
            name: 'Midstill',
            alignTextChosen: 'center',
            icon: IconCenterTextAlign,
        },
        {
            name: 'Venstrejuster',
            alignTextChosen: 'left',
            icon: IconLeftTextAlign,
        },
        {
            name: 'Høyrejuster',
            alignTextChosen: 'right',
            icon: IconRightTextAlign,
        },
    ];

    const fontTypes = [
        {
            name: 'Standard',
            fontTypeChosen: 'Avenir',
            icon: IconStandardFont,
        },
        {
            name: 'Sans Serif',
            fontTypeChosen: 'Arial',
            icon: IconSansSerifFont,
        },
        {
            name: 'Serif',
            fontTypeChosen: 'Times New Roman',
            icon: IconSerifFont,
        },
        {
            name: 'Monospace',
            fontTypeChosen: 'Monospace',
            icon: IconMonospaceFont,
        },
    ];

    const textEdit = [
        {
            name: 'Forstørr',
            action: changeSizeBigger,
            icon: IconBigText,
        },
        {
            name: 'Reduser',
            action: changeSizeSmaller,
            icon: IconSmallText,
        },
        {
            name: 'Tilbakestill',
            action: () => {
                setFontsize(24);
                setFontfamily('Avenir');
                setAlignText('left');
            },
            icon: IconTextSizeRefresh,
        },
    ];

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
                                src={DemoLydFil}
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
                        <div>
                            <button
                                type="button"
                                onClick={openModalOne}
                                className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out"
                            >
                                <IconRetry />
                                Prøv igjen
                            </button>

                            <RetryModal 
                                open={isOpenOne} 
                                onClose={closeModalOne}
                                onRetry={closeModalReturnToRecording}
                            />
                        </div>

                        <div>
                            <button
                                onClick={() => navigate('/takk')}
                                className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft"
                            >
                                <IconPaperPlane />
                                <b>Send inn!</b>
                            </button>
                        </div>
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
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-[-115%]"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-[-115%]"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[30rem] -translate-x-[55%] transform px-4 sm:px-0 lg:max-w-3xl">
                                                <div className="overflow-hidden rounded-lg shadow-2xl ring-opacity-5 bg-secondary border-4 border-secondary">
                                                    <h6 className="text-dark mt-8 text-left pl-4 uppercase font-bold text-small">
                                                        Velg skrifttype
                                                    </h6>
                                                    <div className="relative grid gap-8  p-7 grid-cols-2">
                                                        {fontTypes.map(
                                                            (item) => (
                                                                <a
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    onClick={() =>
                                                                        setFontfamily(
                                                                            item.fontTypeChosen
                                                                        )
                                                                    }
                                                                    className={`${
                                                                        fontfamily ===
                                                                        item.fontTypeChosen
                                                                            ? 'bg-secondary-soft'
                                                                            : 'bg-secondary-darksoft'
                                                                    } -m-3 hover:bg-secondary-soft flex text-black items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                                                                >
                                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                                        <item.icon aria-hidden="true" />
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                    <h6 className="text-dark mt-4 text-left pl-4 uppercase font-bold text-small">
                                                        Juster tekst
                                                    </h6>
                                                    <div className="relative grid gap-8   p-7 grid-cols-2">
                                                        {textAlign.map(
                                                            (item) => (
                                                                <a
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    onClick={() =>
                                                                        setAlignText(
                                                                            item.alignTextChosen
                                                                        )
                                                                    }
                                                                    className={`${
                                                                        alignText ===
                                                                        item.alignTextChosen
                                                                            ? 'bg-secondary-soft'
                                                                            : 'bg-secondary-darksoft'
                                                                    } -m-3 hover:bg-secondary-soft flex text-black items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                                                                >
                                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                                        <item.icon aria-hidden="true" />
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            )
                                                        )}
                                                    </div>

                                                    <h6 className="text-dark mt-4 text-left pl-4 uppercase font-bold text-small">
                                                        Endre størrelse
                                                    </h6>
                                                    <div className="relative grid gap-8 p-7 grid-cols-3">
                                                        {textEdit.map(
                                                            (item) => (
                                                                <a
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    onClick={
                                                                        item.action
                                                                    }
                                                                    className={`-m-3 hover:bg-secondary-soft  flex text-black w-fit items-center rounded-lg pr-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                                                                >
                                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                                        <item.icon aria-hidden="true" />
                                                                    </div>
                                                                    <div className="ml-2">
                                                                        <p className="text-small font-medium text-gray-900">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </div>

                        <div>
                            <button
                                onClick={openModalTwo}
                                className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out"
                            >
                                <IconRefresh className="w-6 h-6" />
                                Ny tekst
                            </button>
                        </div>
                    </div>
                    <Transition appear show={isOpenTwo} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-10"
                            onClose={closeModalTwo}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-90" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-14 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md text-center transform overflow-hidden rounded-lg bg-white p-14 align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-h4 font-medium leading-6"
                                            >
                                                Ønsker du en ny tekst?
                                            </Dialog.Title>

                                            <div className="mt-5 grid place-content-center">
                                                <button
                                                    type="button"
                                                    onClick={closeModalTwo}
                                                    className="transScale bg-secondary px-4 py-4 font-bold text-p text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                                                >
                                                    Nei!
                                                </button>

                                                <button
                                                    type="button"
                                                    className="bg-light px-5 py-2 mt-2 text-black font-medium rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
                                                >
                                                    Ja
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
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
    const [fontsize, setFontsize] = useState(24);
    const [fontfamily, setFontfamily] = useState('Avenir');
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
                        setFontsize={setFontsize}
                        setFontfamily={setFontfamily}
                        alignText={alignText}
                        setAlignText={setAlignText}
                        time={time}
                    />
                </div>
            </footer>
        </div>
    );
}
