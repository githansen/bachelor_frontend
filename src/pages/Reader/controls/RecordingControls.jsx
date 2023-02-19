//React library
import { useState, useEffect } from 'react';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as AudioStopIcon } from '@/assets/icons/AudioStopIcon.svg';

//Returns a string with the time in minutes and seconds
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

//Controls for recording audio
export default function RecordingControls({
    setReaderState,
    time = null,
    startRecording,
    stopRecording,
}) {
    const textRecording = 'Tar opp lyd...';
    const textStopRecording = 'Stopp opptak';

    const [recordingText, setRecordingText] = useState(textRecording);

    useEffect(() => {
        startRecording();
    }, []);

    return (
        <m.div
            initial={{ y: '15%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="
            grid 
            grid-cols-1 
            place-items-center 
            w-full 
            trasition 
            md:min-h-[5.5rem]"
        >
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
                        <div className="h-4 w-4 rounded-full bg-rose animate-pulse"></div>
                    </div>
                </div>
                <div className="xs:w-fit sm:w-fit mx-5 md:w-[14rem]">
                    <button
                        className="
                        font-fet
                        xs:text-xsknappliten 
                        sm:text-smknappliten 
                        xl:text-xlknappliten 
                        text-knappliten 
                        inline-flex
                        justify-center
                        items-center
                        gap-2 
                        border-solid 
                        border-2 
                        rounded-full 
                        transScale
                        bg-skumring 
                        border-rose 
                        text-fred 
                        hover:bg-rose
                        xs:px-4
                        xs:py-4
                        sm:px-4
                        sm:py-4
                        md:px-5 
                        md:py-4
                        transition 
                        ease-in-out 
                        duration-150"
                        onMouseEnter={() => setRecordingText(textStopRecording)}
                        onMouseLeave={() => setRecordingText(textRecording)}
                        onClick={() => {
                            stopRecording();
                            setReaderState(() => 'completed');
                            setRecordingText(textRecording);
                        }}
                    >
                        <AudioStopIcon className={`w-6 h-6"`} />
                        <span className="xs:hidden sm:hidden md:block">
                            Stopp opptak?
                        </span>
                    </button>
                </div>
            </div>
        </m.div>
    );
}
