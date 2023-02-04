import { useState } from 'react';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default function RecordingControls({ setReaderState, time = null }) {
    const [recordingText, setRecordingText] = useState('Tar opp lyd...');

    const askToStop = () => {
        setRecordingText('Stopp opptak?');
    };

    const resetRecordingText = () => {
        setRecordingText('Tar opp lyd...');
    };

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
                            setReaderState(() => 'completed');
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
}
