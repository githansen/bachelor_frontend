//React library
import { useState } from 'react';
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

export default function CompletedControls({ setReaderState, audio, submitRecording }) {
    let [retryModalOpen, setRetryModalOpen] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-1 items-center w-full trasition mb-5">
                <div className="w-full">
                    {audio && (
                        <AudioPlayer
                            className=""
                            src={audio.url}
                            layout="stacked"
                            preload="auto"
                            autoPlay={false}
                            timeFormat={'mm:ss'}
                            showJumpControls={true}
                            progressJumpStep={15000}
                            customControlsSection={['MAIN_CONTROLS']}
                            customIcons={{
                                rewind: <AudioRewindIcon className="h-7 w-7" />,
                                forward: (
                                    <AudioForwardIcon className="h-7 w-7" />
                                ),
                                play: <AudioPlayIcon className="h-9 w-9" />,
                                pause: <AudioPauseIcon className="h-9 w-9" />,
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 items-center w-full trasition mb-5">
                <div className="flex flex-row place-self-center self-center gap-5">
                    <button
                        type="button"
                        onClick={() => setRetryModalOpen(true)}
                        className="px-3 py-2 font-normal inline-flex gap-2 self-center border-solid border-2 rounded-full bg-skumring text-fred border-solskinn hover:text-solskinn transition ease-in-out"
                    >
                        <IconRetry className="w-6 h-6" />
                        Prøv på nytt
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
                        className="px-4 py-3 font-fet inline-flex gap-2 border-2 self-center rounded-full bg-paskeegg text-natt border-solskinn  hover:bg-solskinn hover:text-skumring transition ease-in-out"
                        onClick={submitRecording}
                    >
                        <IconPaperPlane className="w-6 h-6 animate-pulse" />
                        Send inn
                    </button>
                </div>
            </div>
        </div>
    );
}
