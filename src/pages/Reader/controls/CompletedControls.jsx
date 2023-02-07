import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoSoundtrack from '@/assets/soundtracks/demoSoundTrack.mp3';
import AudioPlayer from 'react-h5-audio-player';
import { ReactComponent as IconRetry } from '@/assets/icons/IconRetry.svg';
import { ReactComponent as IconPaperPlane } from '@/assets/icons/IconPaperPlane.svg';
import RetryModal from '../RetryModal';

export default function CompletedControls({ setReaderState }) {
    let [retryModalOpen, setRetryModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-between w-full">
            <div className="text-left self-center flex flex-col">
                <h3 className="text-h3 font-semibold text-fred">
                    Det høres bra ut!
                </h3>
                <p className="text-p text-solskinn">Hør på lydklippet ditt</p>
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
                    className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out"
                >
                    <IconRetry />
                    Prøv igjen
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
                    onClick={() => navigate('/takk')}
                    className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-solskinn text-natt border-solskinn hover:bg-paskeegg"
                >
                    <IconPaperPlane />
                    <b>Send inn!</b>
                </button>
            </div>
        </div>
    );
}
