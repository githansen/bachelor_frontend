import { useEffect, useState } from 'react';
import HeaderMinimal from '@/components/shared/HeaderMinimal';
import HeaderMinimalSmall from '@/components/shared/HeaderMinimalSmall';
import '@/styles/audioplayer.css';
import { useTimer } from 'use-timer';
import CompletedControls from './controls/CompletedControls';
import CompletedControlsSmall from './controls/CompletedControlsSmall';
import RecordingControls from './controls/RecordingControls';
import IdleControls from './controls/IdleControls';
import IdleControlsSmall from './controls/IdleControlsSmall';
import userReadingProgress from '../../hooks/userReadingProgress';
import { motion as m } from 'framer-motion';
import useRecorder from '@/hooks/useRecorder';
import { useApi } from '@/utils/api';

// Main text to be read by user
function TextPanel({ text, state, fontColor, fontsize, fontfamily, alignText }) {
    return (
        <div>
            <div
                style={{
                    fontSize: `${fontsize}px`,
                    fontFamily: `${fontfamily}`,
                    color: `${state == 'completed' ? '#C2C2C2' : fontColor} `,
                    textAlign: `${alignText}`,
                }}
                className={` rounded-lg leading-loose xs:p-0 sm:p-0 md:p-8 bordser-2 transition-colors text-justify duration-400`}
            >
                {text}
            </div>
        </div>
    );
}

// Stateful wrapping component
export default function Reader() {
    const { response: text, loading, refetch } = useApi('User/GetText');
    //Top - Reading Progress Bar
    const completion = userReadingProgress();
    const [state, setState] = useState('idle'); // idle | recording | completed

    // Recording
    const { startRecording, stopRecording, audio, isRecording } = useRecorder();
    const { time, start: timerStart, reset: timerReset } = useTimer();

    //Checks the width of window and sets the size of the window (For respoonive design functionality)
    var [windowSize, setWindowSize] = useState([window.innerWidth]);
    if (windowSize <= 600) {
        windowSize = 'XS';
    } else if (windowSize > 600 && windowSize <= 992) {
        windowSize = 'SM';
    } else if (windowSize > 992 && windowSize <= 1280) {
        windowSize = 'MD';
    } else if (windowSize > 1280 && windowSize <= 2000) {
        windowSize = 'LG';
    } else if (windowSize > 2000) {
        windowSize = 'XL';
    }
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    // TextEdit - Responsive Font Size
    const [fontsize, setFontSize] = useState(24);
    useEffect(() => {
        if (windowSize === 'XS') {
            setFontSize(20);
        } else if (windowSize === 'SM') {
            setFontSize(22);
        } else if (
            windowSize === 'MD' ||
            windowSize === 'LG' ||
            windowSize === 'XL'
        ) {
            setFontSize(24);
        } else {
            setFontSize(24);
        }
    }, [windowSize]);

    // TextEdit
    const [fontfamily, setFontFamily] = useState('Avenir');
    const [alignText, setAlignText] = useState('left');
    // Switch light/dark theme
    const [stylebgcolor, setStyleBgColor] = useState('bg-special-light');
    const [stylecolorfont, setStyleColorFont] = useState('#000000');

    // Record when state enters recording
    useEffect(() => {
        if (state === 'recording' && isRecording) {
            timerStart();
        } else {
            timerReset();
        }
    }, [state, isRecording]);

    const renderControls = () => {
        switch (state) {
            case 'completed':
                return (
                    <div className="w-full">
                        <div className="xs:hidden sm:hidden md:block">
                            <CompletedControls
                                setReaderState={setState}
                                audio={audio}
                            />
                        </div>
                        <div className="xs:block sm:block md:hidden">
                            <CompletedControlsSmall
                                setReaderState={setState}
                                audio={audio}
                            />
                        </div>
                    </div>
                );
            case 'recording':
                return (
                    <RecordingControls
                        setReaderState={setState}
                        time={time}
                        startRecording={startRecording}
                        stopRecording={stopRecording}
                    />
                );

            case 'idle':
            default:
                return (
                    <div className="w-full">
                        <div className="xs:hidden sm:hidden md:block">
                            <IdleControls
                                setReaderState={setState}
                                setStyleBgColor={setStyleBgColor}
                                stylecolorfont={stylecolorfont}
                                setStyleColorFont={setStyleColorFont}
                                setFontSize={setFontSize}
                                setFontFamily={setFontFamily}
                                alignText={alignText}
                                setAlignText={setAlignText}
                                reloadText={refetch}
                            />
                        </div>
                        <div className="xs:block sm:block md:hidden">
                            <IdleControlsSmall
                                setReaderState={setState}
                                setStyleBgColor={setStyleBgColor}
                                stylecolorfont={stylecolorfont}
                                setStyleColorFont={setStyleColorFont}
                                setFontSize={setFontSize}
                                setFontFamily={setFontFamily}
                                alignText={alignText}
                                setAlignText={setAlignText}
                            />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div>
            <span
                style={{ transform: `translateX(${completion - 100}%)` }}
                className="bg-solskinn h-2 w-full xs:top-[4.7rem] sm:top-[5.7rem] md:top-0 fixed transition duration-75 linear z-50"
            />
            <div
                className={`${
                    state == 'completed' ? 'bg-mane' : stylebgcolor
                } min-h-screen xs:px-4 xs:pt-24 xs:pb-36 sm:pt-28 sm:pb-36 sm:px-4 md:pt-0 md:pb-56 md:px-10`}
            >
                <div className="w-full">
                    <div className="xs:hidden sm:hidden md:block">
                        <HeaderMinimal />
                    </div>
                    <div className="xs:block sm:block md:hidden">
                        <HeaderMinimalSmall state={state} />
                    </div>
                </div>

                <div className=" max-w-2xl px-0 mx-auto pt-0 flex flex-col place-items-center">
                    <div className="mx-auto">
                        <TextPanel
                            text={text?.textText}
                            state={state}
                            fontColor={stylecolorfont}
                            fontsize={fontsize}
                            fontfamily={fontfamily}
                            alignText={alignText}
                        />
                    </div>
                </div>

                <footer
                    className="bg-skumring
                        text-fred 
                        text-center
                        fixed
                        inset-x-0
                        bottom-0
                        xs:py-3
                        xs:px-5
                        xs:m-3
                        sm:py-3
                        sm:px-5
                        sm:m-5
                        md:p-10
                        md:m-10
                        rounded-lg
                        "
                >
                    <div className="h-30 flex justify-center ">
                        {renderControls()}
                    </div>
                </footer>
            </div>
        </div>
    );
}
