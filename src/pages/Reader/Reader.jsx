//React library
import { useEffect, useState } from 'react';
//Shared components
import HeaderMinimal from '@/components/shared/HeaderMinimal';
import HeaderMinimalSmall from '@/components/shared/HeaderMinimalSmall';
//Components
import CompletedControls from '@/pages/Reader/controls/CompletedControls';
import CompletedControlsSmall from '@/pages/Reader/controls/CompletedControlsSmall';
import RecordingControls from '@/pages/Reader/controls/RecordingControls';
import IdleControls from '@/pages/Reader/controls/IdleControls';
import IdleControlsSmall from '@/pages/Reader/controls/IdleControlsSmall';
//Hooks
import useReadingProgress from '@/hooks/useReadingProgress';
import useRecorder from '@/hooks/useRecorder';
import { useApi, validateResponse } from '@/utils/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
//Audioplayer
import '@/styles/audioplayer.css';
//Timer library
import { useTimer } from 'use-timer';
//Animation library
import { motion as m } from 'framer-motion';
// Icons
import LogoGidinStemmeIconNoBg from '@/assets/img/Logo/GidinStemmeIconNoBg.png';

// Main text to be read by user
function TextPanel({
    text,
    state,
    fontColor,
    fontsize,
    fontfamily,
    alignText,
    loading,
}) {
    return (
        <div>
            {loading ? (
                <div class="mt-20 animate-bounce">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                        }}
                    >
                        <div class="animate-spin">
                            <img width="60px" src={LogoGidinStemmeIconNoBg} />
                        </div>
                    </m.div>
                </div>
            ) : (
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                    }}
                    style={{
                        fontSize: `${fontsize}px`,
                        fontFamily: `${fontfamily}`,
                        color: state == 'completed' ? '#C2C2C2' : fontColor,
                        textAlign: `${alignText}`,
                    }}
                    className={` rounded-lg leading-loose xs:p-0 sm:p-0 md:p-8 bordser-2 transition-colors text-justify duration-400`}
                >
                    {text}
                </m.div>
            )}
        </div>
    );
}

// Stateful wrapping component
export default function Reader() {
    const { response: text, loading, refetch } = useApi('User/GetText');
    //Top - Reading Progress Bar
    const completion = useReadingProgress();
    const [state, setState] = useState('idle'); // idle | recording | completed

    const navigate = useNavigate();

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

    const submitRecording = async () => {
        if (!audio || !text) {
            toast.error('Noe gikk galt med opptaket, prøv igjen');
            return;
        }

        // Request using formdata to send blob file to avoid base64 encode with json
        const formData = new FormData();
        formData.append('textId', text.textId);
        formData.append('recording', audio.blob, 'test.m4a');

        const promise = fetch('/api/User/SaveFile', {
            method: 'POST',
            body: formData,
        })
            .then(validateResponse)
            .then(() => navigate('/takk'));

        toast.promise(promise, {
            loading: 'Sender ...',
            success: 'Opptak sendt',
            error: (err) =>
                err.status === 401
                    ? 'Du må logge inn for å sende inn opptak'
                    : 'Noe gikk galt hos oss, prøv igjen senere',
        });
    };

    const renderControls = () => {
        switch (state) {
            case 'completed':
                return (
                    <div className="w-full">
                        <div className="xs:hidden sm:hidden md:block">
                            <CompletedControls
                                setReaderState={setState}
                                audio={audio}
                                submitRecording={submitRecording}
                            />
                        </div>
                        <div className="xs:block sm:block md:hidden">
                            <CompletedControlsSmall
                                setReaderState={setState}
                                audio={audio}
                                submitRecording={submitRecording}
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
                                reloadText={refetch}
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
                className="bg-solskinn h-2 w-full top-0 fixed transition duration-75 linear z-50"
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

                <div className="xs:max-w-[30em] xs:px-5 sm:max-w-[45em] sm:px-10 md:max-w-[75em] px-0 mx-auto pt-0 flex flex-col place-items-center">
                    <div className="mx-auto">
                        <TextPanel
                            text={text?.textText}
                            loading={loading}
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
