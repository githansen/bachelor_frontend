import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoSoundtrack from '@/assets/soundtracks/demoSoundTrack.mp3';
import AudioPlayer from 'react-h5-audio-player';
import { ReactComponent as IconRetry } from '@/assets/icons/IconRetry.svg';
import { ReactComponent as IconPaperPlane } from '@/assets/icons/IconPaperPlane.svg';
import { ReactComponent as AudioRewindIcon } from '@/assets/icons/AudioRewindIcon.svg';
import { ReactComponent as AudioForwardIcon } from '@/assets/icons/AudioForwardIcon.svg';
import { ReactComponent as AudioPlayIcon } from '@/assets/icons/AudioPlayIcon.svg';
import { ReactComponent as AudioPauseIcon } from '@/assets/icons/AudioPauseIcon.svg';
import { ReactComponent as AudioVolumeIcon } from '@/assets/icons/AudioVolumeIcon.svg';
import { ReactComponent as AudioVolumeMuteIcon } from '@/assets/icons/AudioVolumeMuteIcon.svg';
import RetryModal from '../RetryModal';
import { motion as m } from 'framer-motion';

export default function CompletedControls({ setReaderState }) {
    let [retryModalOpen, setRetryModalOpen] = useState(false);
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
                        <AudioPlayer
                            className="w-full"
                            layout="horizontal-reverse"
                            src={DemoSoundtrack}
                            showFilledVolume={true}
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
                    </div>
                </div>
            </div>

            <div className="basis-1/3 place-items-end flex flex-row justify-end self-center  gap-5">
                <button
                    type="button"
                    onClick={() => setRetryModalOpen(true)}
                    className={`lg:px-4 md:px-3 lg:py-2 md:py-3 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out`}
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
                    className="transScale lg:px-4 md:px-3 lg:py-2 md:py-3 font-fet inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-paskeegg text-natt border-solskinn hover:bg-solskinn  transition duration-150 ease-in-out"
                    onClick={() => navigate('/takk')}
                >
                    <IconPaperPlane className="w-6 h-6 animate-pulse" />
                    Send inn
                </button>
            </div>
        </m.div>
    );
}
