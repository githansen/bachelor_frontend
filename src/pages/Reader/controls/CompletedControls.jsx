//React library
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Audioplayer library
import AudioPlayer from 'react-h5-audio-player';
//Animation library
import { motion as m } from 'framer-motion';
//Components
import RetryModal from '@/pages/Reader/RetryModal';
//Graphic assets
import { ReactComponent as IconRetry } from '@/assets/icons/IconRetry.svg';
import { ReactComponent as IconPaperPlane } from '@/assets/icons/IconPaperPlane.svg';
import { ReactComponent as AudioRewindIcon } from '@/assets/icons/AudioRewindIcon.svg';
import { ReactComponent as AudioForwardIcon } from '@/assets/icons/AudioForwardIcon.svg';
import { ReactComponent as AudioPlayIcon } from '@/assets/icons/AudioPlayIcon.svg';
import { ReactComponent as AudioPauseIcon } from '@/assets/icons/AudioPauseIcon.svg';

//Controls for completed recording
export default function CompletedControls({ setReaderState, audio }) {
    let [retryModalOpen, setRetryModalOpen] = useState(false);
    let [displayAudioPlayer, setDisplayAudioPlayer] = useState(false);
    const navigate = useNavigate();

    return (
        <m.div
            initial={{ y: '15%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="
            flex 
            w-full 
            md:min-h-[5.5rem]"
        >
            <div className="basis-2/3">
                <div className="text-left place-self-start self-center flex flex-col">
                    <h3
                        className="
                    font-fet 
                    xs:text-xsh3 
                    sm:text-smh3 
                    xl:text-xlh3 
                    text-h3
                    text-fred"
                    >
                        Opptak er avsluttet
                    </h3>
                    <p className="text-p text-solskinn">
                        Hør på lydklippet ditt eller send inn ditt bidrag
                    </p>
                </div>

                <div className="text-left place-items-start self-center">
                    <div className="md:min-w-[28rem] lg:min-w-[40rem] ">
                        <div
                            className={`${
                                displayAudioPlayer ? 'block' : 'hidden'
                            }`}
                        >
                            {audio && (
                                <AudioPlayer
                                    className="w-full"
                                    layout="horizontal-reverse"
                                    preload="auto"
                                    autoPlay={false}
                                    src={audio.url}
                                    timeFormat={'mm:ss'}
                                    onLoadedData={() =>
                                        setDisplayAudioPlayer(true)
                                    }
                                    showJumpControls={true}
                                    progressJumpStep={15000}
                                    customControlsSection={['MAIN_CONTROLS']}
                                    customIcons={{
                                        rewind: (
                                            <AudioRewindIcon className="h-7 w-7 hover:opacity-50 transition duration-200 ease-in-out" />
                                        ),
                                        forward: (
                                            <AudioForwardIcon className="h-7 w-7 hover:opacity-50 transition duration-200 ease-in-out" />
                                        ),
                                        play: (
                                            <AudioPlayIcon className="h-9 w-9 hover:opacity-50 transition duration-200 ease-in-out" />
                                        ),
                                        pause: (
                                            <AudioPauseIcon className="h-9 w-9 hover:opacity-50 transition duration-200 ease-in-out" />
                                        ),
                                    }}
                                />
                            )}
                        </div>
                        <div
                            className={`
                            flex
                            mt-2
                            ${displayAudioPlayer ? 'hidden' : 'block'}`}
                        >
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Laster inn lydklipp
                        </div>
                    </div>
                </div>
            </div>

            <div className="basis-1/3 place-items-end flex flex-row justify-end self-center  gap-5">
                <button
                    type="button"
                    onClick={() => setRetryModalOpen(true)}
                    className={`lg:px-4 md:px-3 lg:py-2 md:py-3 font-medium inline-flex gap-2 border-solid border-2 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out`}
                >
                    <IconRetry className="w-6 h-6" />
                    <span className="md:hidden lg:block">Prøv igjen</span>
                </button>

                <RetryModal
                    open={retryModalOpen}
                    onClose={() => setRetryModalOpen(false)}
                    onRetry={() => {
                        setRetryModalOpen(false);
                        setReaderState('recording');
                    }}
                />
                <button
                    className="transScale lg:px-4 md:px-3 lg:py-2 md:py-3 font-fet inline-flex gap-2 border-solid border-2 rounded-full bg-paskeegg text-natt border-solskinn hover:bg-solskinn  transition duration-150 ease-in-out"
                    onClick={() => navigate('/takk')}
                >
                    <IconPaperPlane className="w-6 h-6 animate-pulse" />
                    Send inn
                </button>
            </div>
        </m.div>
    );
}
