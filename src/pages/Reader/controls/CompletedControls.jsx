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

export default function CompletedControls({ setReaderState }) {
    let [retryModalOpen, setRetryModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 w-full trasition md:min-h-[5.5rem]">
            <div className="text-left place-self-start self-center flex flex-col">
                <h3 className="text-h3 font-semibold text-fred">
                    Det høres bra ut!
                </h3>
                <p className="text-p text-solskinn">Hør på lydklippet ditt</p>
            </div>

            <div className="text-left place-self-center place-items-center self-center flex flex-col">
                <div className="min-w-[40rem]">
                    <AudioPlayer
                        className="w-full"
                        src={DemoSoundtrack}
                        showFilledVolume={true}
                        showJumpControls={true}
                        customControlsSection={[
                            'MAIN_CONTROLS',
                            'VOLUME_CONTROLS',
                        ]}
                        customIcons={{
                            rewind: <AudioRewindIcon />,
                            forward: <AudioForwardIcon />,
                            play: <AudioPlayIcon />,
                            pause: <AudioPauseIcon />,
                            volume: <AudioVolumeIcon />,
                            volumeMute: <AudioVolumeMuteIcon />,
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-row place-items-center place-self-end self-center  gap-5">
                <button
                    type="button"
                    onClick={() => setRetryModalOpen(true)}
                    className={`lg:px-4 md:px-3 lg:py-2 md:py-3 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out`}
                    >
                    <IconRetry className="w-6 h-6"/>
                    <span className='md:hidden lg:block'>Prøv igjen</span>
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
                    className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-solskinn text-natt border-solskinn hover:bg-paskeegg  transition duration-150 ease-in-out"
                    onClick={() => navigate('/takk')}
                >
                    <IconPaperPlane className="w-6 h-6"/>
                    <b>Send inn!</b>
                </button>
            </div>
        </div>
    );
}
