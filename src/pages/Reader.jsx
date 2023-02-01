import { useEffect, useState, Fragment } from "react";
import DemoLydFil from "../assets/soundtracks/demoSoundTrack.mp3";
import HeaderMinimal from "../components/shared/HeaderMinimal";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "@/styles/audioplayer.css";
import { useTimer } from "use-timer";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Buttons in top right for recording, playing, submitting, etc.
function Controls({ state, setState, time=null }) {
	const navigate = useNavigate();

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	const [recordingText, setRecordingText] = useState('Tar opp lyd...');

	const askToStop = () => {
		setRecordingText('Stopp opptak?')
	};

	const resetRecordingText = () => {
		setRecordingText('Tar opp lyd...')
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
							Hør på lydklippet ditt
						</p>
					</div>

					<div className='text-left self-center flex flex-col'>
						<div className='min-w-[40rem]'>
							<AudioPlayer
								className='w-full'
								src={DemoLydFil}
								showFilledVolume={true}
								showJumpControls={false}
								customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
							/>
						</div>
					</div>

          <div className="flex flex-row place-items-center self-center gap-5">
            <div>
              <button
                className="px-3 py-2 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-white text-black border-light hover:bg-primary hover:text-white"
                onClick={() => setState("recording")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Prøv igjen
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/takk")}
                className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
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
						<button 
							className={`${recordingText == 'Stopp opptak?' ? '' : 'animate-pulse'} px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full text-dark bg-secondary-soft border-secondary hover:bg-red hover:border-red hover:text-white`}
							onMouseEnter={askToStop}
							onMouseLeave={resetRecordingText}
							onClick={() => {
								setState(() => 'completed');
								resetRecordingText();
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
							</svg>
							<b>{recordingText}</b>
						</button>
					</div>
				</div>
			);

    case "idle":
    default:
      return (
        <div className="flex flex-row justify-between w-full trasition">
          <div className="text-left self-center flex flex-col">
            <h3 className="text-h3 font-semibold text-white">
              Klar til opptak?
            </h3>
            <p className="text-p text-secondary">Estimert lesetid: 2 min</p>
          </div>

          <div className="flex flex-row place-items-center self-center gap-5">
            <div>
              <button className="px-4 py-2 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-white text-black border-light hover:bg-primary hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Ny tekst
              </button>
            </div>
            <div>
              <button
                className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft"
                onClick={() => setState("recording")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
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
  const [fontsize, setFontsize] = useState(24);
  const [fontfamily, setFontfamily] = useState("Arial");
  const [stylecolor, setStyleColor] = useState("#ffefb6");
  const [stylecolorfont, setStyleColorFont] = useState("#000");
  const [stylecolorborder, setStyleColorBorder] = useState("#FFD039");

  const changeSizeBigger = (event) => {
    if (fontsize >= 28) {
      setFontsize(28);
    } else {
      setFontsize(fontsize + 1);
    }
  };
  const changeSizeSmaller = (event) => {
    if (fontsize <= 22) {
      setFontsize(22);
    } else {
      setFontsize(fontsize - 1);
    }
  };
  const changeStyleColor = (event) => {
    if (stylecolor == "#171717") {
      setStyleColor("#ffefb6");
      setStyleColorFont("#000");
      setStyleColorBorder("#FFD039");
    }
    if (stylecolor == "#ffefb6") {
      setStyleColor("#171717");
      setStyleColorFont("#ffffff");
      setStyleColorBorder("#000000");
    }
  };

  const bgColor = {
    idle: `${stylecolor}`,
    recording: `${stylecolor}`,
    completed: "#f2f2f2",
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

  const textEdit = [
    {
      name: "Forstørr",
      action: changeSizeBigger,
      icon: IconBigText,
    },
    {
      name: "Reduser",
      action: changeSizeSmaller,
      icon: IconSmallText,
    },
    {
      name: "Tilbakestill",
      action: () => {
        setFontsize(28);
        setFontfamily("Arial");
      },
      icon: IconRefresh,
    },
  ];
  const fontTypes = [
    {
      name: "Standard",
      fontTypeChosen: "Helvetica",
      icon: IconStandard,
    },
    {
      name: "Sans Serif",
      fontTypeChosen: "Arial",
      icon: IconSansSerif,
    },
    {
      name: "Serif",
      fontTypeChosen: "Times New Roman",
      icon: IconSerif,
    },
    {
      name: "Monospace",
      fontTypeChosen: "Monospace",
      icon: IconMonospace,
    },
  ];
  function IconStandard() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <g>
          <path
            fill="#ffefb6"
            d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
          ></path>
          <text
            x="1686.49"
            y="3797.11"
            fill="#977405"
            fontFamily="'Montserrat-Bold', 'Montserrat'"
            fontSize="3363.62"
            fontWeight="700"
          >
            T
          </text>
        </g>
      </svg>
    );
  }

  function IconSerif() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <text
          x="1719.63"
          y="3797.11"
          fill="#977405"
          fontFamily="serif"
          fontSize="3289.28"
          fontWeight="700"
        >
          T
        </text>
      </svg>
    );
  }

  function IconSansSerif() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <text
          x="1719.63"
          y="3797.11"
          fill="#977405"
          fontFamily="'Arial-BoldMT', 'Arial', sans-serif"
          fontSize="3289.28"
          fontWeight="700"
        >
          T
        </text>
      </svg>
    );
  }

  function IconMonospace() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <text
          x="1719.63"
          y="3797.11"
          fill="#977405"
          fontFamily="'monospace'"
          fontSize="3289.28"
          fontWeight="700"
        >
          T
        </text>
      </svg>
    );
  }

  function IconBigText() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <text
          x="1301.8"
          y="4010.13"
          fill="#977405"
          fontFamily="'Montserrat-Regular', 'Montserrat'"
          fontSize="3972.25"
        >
          A
        </text>
      </svg>
    );
  }
  function IconSmallText() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <text
          x="1959.9"
          y="3367.62"
          fill="#977405"
          fontFamily="'Montserrat-Regular', 'Montserrat'"
          fontSize="2136.53"
        >
          A
        </text>
      </svg>
    );
  }
  function IconRefresh() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 5452 5240"
      >
        <path fill="none" d="M0 0H5451.69V5239.68H0z"></path>
        <path
          fill="#ffefb6"
          d="M5451.69 785.952C5451.69 352.173 5099.516 0 4665.738 0H785.948C352.169 0-.004 352.173-.004 785.952v3667.78c0 433.779 352.173 785.953 785.952 785.953h3879.79c433.778 0 785.952-352.174 785.952-785.953V785.952z"
        ></path>
        <path
          fill="#977304"
          d="M1852.21 2385.78c105.549-394.272 465.527-670.558 873.682-670.558 239.771 0 469.968 95.346 639.518 264.884l229.488 229.488h-383.847c-49.617 0-90.445 40.828-90.445 90.445 0 49.616 40.828 90.444 90.445 90.444h601.999c49.617 0 90.445-40.828 90.445-90.444v-602c0-49.616-40.828-90.444-90.445-90.444-49.616 0-90.444 40.828-90.444 90.444v383.485l-229.127-229.126c-203.476-203.57-479.8-318.065-767.625-318.065-489.736 0-921.678 331.475-1048.38 804.537a90.497 90.497 0 00-3.076 23.395c0 49.65 40.856 90.505 90.506 90.505 40.847 0 76.871-27.652 87.43-67.11l-.121.12zm1858.1 404.228a90.408 90.408 0 00-23.468-3.098c-40.799 0-76.786 27.606-87.357 67.012-105.548 394.272-465.526 670.558-873.681 670.558-239.771 0-469.968-95.346-639.518-264.884l-229.368-229.488h383.848c49.616 0 90.444-40.828 90.444-90.445 0-49.616-40.828-90.444-90.444-90.444h-602.121c-49.616 0-90.444 40.828-90.444 90.444v602c0 49.616 40.828 90.445 90.444 90.445 49.617 0 90.445-40.829 90.445-90.445v-383.485l229.127 229.126c203.474 203.555 479.787 318.039 767.6 318.039 489.772 0 921.736-331.524 1048.41-804.631 12.802-47.893-16.036-97.844-63.914-110.704z"
        ></path>
      </svg>
    );
  }

  return (
    <div>
      <div className=" w-full max-w-sm">
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="flex items-center gap-5 mb-5">
                <Popover.Button
                  className={`
							${open ? "" : "text-opacity-90"}
							group inline-flex items-center rounded-md bg-secondary-soft px-3 py-2 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span>Endre tekst</span>
                  <ChevronDownIcon
                    className={`${open ? "" : "text-opacity-70"}
							ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>

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
                  <div className="ml-3 text-gray-700 text-btnsmall">Farge</div>
                </label>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-[-10%]"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-[-10%]"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[30rem] -translate-x-[40%] transform px-4 sm:px-0 lg:max-w-3xl bg-white">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8  bg-white p-7 grid-cols-2">
                      {fontTypes.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => setFontfamily(item.fontTypeChosen)}
                          className={`${
                            fontfamily == item.fontTypeChosen
                              ? "bg-secondary-soft"
                              : "bg-white"
                          } -m-3 hover:bg-secondary-soft active:bg-secondary flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="border-dif my-2"></div>

                    <div className="relative grid gap-8 bg-white p-7 grid-cols-3">
                      {textEdit.map((item) => (
                        <a
                          key={item.name}
                          onClick={item.action}
                          className={`-m-3 hover:bg-secondary-soft flex w-fit items-center rounded-lg pr-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-2">
                            <p className="text-small font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      <div
        style={{
          fontSize: `${fontsize}px`,
          fontFamily: `${fontfamily}`,
          backgroundColsor: `${bgColor}`,
          color: `${txtColor}`,
          borderColor: `${borderColor}`,
        }}
        className={`rounded-lg leading-loose p-8 bordser-2 transition-colors text-justify duration-400`}
      >
        "Vedrørende en avtagende oppgaveløsning utvides scenarioet som en følge
        av beskaffenheten. Med tanke på en tiltagende mobilitet ivaretas
        oppfølgingen i tillegg til visjonen. Avhengig av en særlig avklaring
        genereres kompetansehevingen i forhold til evalueringen. I lys av en
        bærekraftig måloppnåelse tilgjengeliggjøres synergieffekten avhengig av
        evalueringen. Sammenholdt med en proaktiv ressursbruk realiseres
        informasjonsflyten i relasjon til problemstillingen. I henhold til en
        proaktiv styringsinnsats maksimeres spisskompetansen hva angår
        resultatoppnåelsen. Med tanke på en særlig styringsinnsats utvides
        kompetansehevingen hva angår en samlet vurdering. Under henvisning til
        en helhetlig struktur styrkes tilstedeværelsen hva gjelder
        ressursinnsatsen. Med tanke på en proaktiv målsetting iverksettes
        strategien i motsetning til løsningen. Forutsatt en integrert
        overveielse innhentes oppfølgingen i tillegg til målområdet. I lys av en
        implisitt organisasjon lokaliseres incitamentet hva gjelder målområdet.
        Under hensyntagen til en langsiktig kvalitetssikring stabiliseres
        potensialet i forlengelsen av egenarten. Under henvisning til en
        bærekraftig avklaring revitaliseres forankringen utenom
        resultatoppnåelsen. I betraktning av en kostnadseffektiv avveining
        utvides potensialet med sikte på evalueringen. Gitt en ikke ubetydelig
        kvalitetssikring stimuleres scenarioet eller sagt på en annen måte:
        realitetsorienteringen. På grunnlag av en tiltagende effektivisering
        maksimeres scenarioet i motsetning til problemstillingen. I forhold til
        en bærekraftig ressursbruk spores relasjonene i relasjon til
        ressursinnsatsen."
      </div>
    </div>
  );
}

// Stateful wrapping component
//shadow-playerShadow
export default function Reader() {
	const [state, setState] = useState('idle'); // idle | recording | completed
	const { time, start, reset } = useTimer();

	useEffect(() => {
		if (state === 'recording') {
			start();
		} else {
			reset();
		}
	}, [state]);

	return (
		<div className='px-10 bg-special'>
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
					p-5"
			>
				<div className="h-30 flex justify-center ">
					<Controls state={state} setState={setState} time={time} />
				</div>
			</footer>
		</div>
	);
}
