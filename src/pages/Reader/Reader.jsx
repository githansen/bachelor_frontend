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
//Audioplayer
import '@/styles/audioplayer.css';
//Timer library
import { useTimer } from 'use-timer';
//Animation library
import { motion as m } from 'framer-motion';

// Main text to be read by user
function TextPanel({ state, fontColor, fontsize, fontfamily, alignText }) {
    const txtColor = {
        idle: `${fontColor}`,
        recording: `${fontColor}`,
        completed: `${fontColor}`,
    }[state];

    return (
        <div>
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
                    color: `${state == 'completed' ? '#C2C2C2' : fontColor} `,
                    textAlign: `${alignText}`,
                }}
                className={` rounded-lg leading-loose xs:p-0 sm:p-0 md:p-8 bordser-2 transition-colors text-justify duration-400`}
            >
                "Vedrørende en avtagende oppgaveløsning utvides scenarioet som
                en følge av beskaffenheten. Med tanke på en tiltagende mobilitet
                ivaretas oppfølgingen i tillegg til visjonen. Avhengig av en
                særlig avklaring genereres kompetansehevingen i forhold til
                evalueringen. I lys av en bærekraftig måloppnåelse
                tilgjengeliggjøres synergieffekten avhengig av evalueringen.
                Sammenholdt med en proaktiv ressursbruk realiseres
                informasjonsflyten i relasjon til problemstillingen. I henhold
                til en proaktiv styringsinnsats maksimeres spisskompetansen hva
                angår resultatoppnåelsen. Med tanke på en særlig styringsinnsats
                utvides kompetansehevingen hva angår en samlet vurdering. Under
                henvisning til en helhetlig struktur styrkes tilstedeværelsen
                hva gjelder ressursinnsatsen. Med tanke på en proaktiv
                målsetting iverksettes strategien i motsetning til løsningen.
                Forutsatt en integrert overveielse innhentes oppfølgingen i
                tillegg til målområdet. I lys av en implisitt organisasjon
                lokaliseres incitamentet hva gjelder målområdet. Under
                hensyntagen til en langsiktig kvalitetssikring stabiliseres
                potensialet i forlengelsen av egenarten. Under henvisning til en
                bærekraftig avklaring revitaliseres forankringen utenom
                resultatoppnåelsen. I betraktning av en kostnadseffektiv
                avveining utvides potensialet med sikte på evalueringen. Gitt en
                ikke ubetydelig kvalitetssikring stimuleres scenarioet eller
                sagt på en annen måte: realitetsorienteringen. På grunnlag av en
                tiltagende effektivisering maksimeres scenarioet i motsetning
                til problemstillingen. I forhold til en bærekraftig ressursbruk
                spores relasjonene i relasjon til ressursinnsatsen.Vedrørende en
                avtagende oppgaveløsning utvides scenarioet som en følge av
                beskaffenheten. Med tanke på en tiltagende mobilitet ivaretas
                oppfølgingen i tillegg til visjonen. Avhengig av en særlig
                avklaring genereres kompetansehevingen i forhold til
                evalueringen. I lys av en bærekraftig måloppnåelse
                tilgjengeliggjøres synergieffekten avhengig av evalueringen.
                Sammenholdt med en proaktiv ressursbruk realiseres
                informasjonsflyten i relasjon til problemstillingen. I henhold
                til en proaktiv styringsinnsats maksimeres spisskompetansen hva
                angår resultatoppnåelsen. Med tanke på en særlig styringsinnsats
                utvides kompetansehevingen hva angår en samlet vurdering. Under
                henvisning til en helhetlig struktur styrkes tilstedeværelsen
                hva gjelder ressursinnsatsen. Med tanke på en proaktiv
                målsetting iverksettes strategien i motsetning til løsningen.
                Forutsatt en integrert overveielse innhentes oppfølgingen i
                tillegg til målområdet. I lys av en implisitt organisasjon
                lokaliseres incitamentet hva gjelder målområdet. Under
                hensyntagen til en langsiktig kvalitetssikring stabiliseres
                potensialet i forlengelsen av egenarten. Under henvisning til en
                bærekraftig avklaring revitaliseres forankringen utenom
                resultatoppnåelsen. I betraktning av en kostnadseffektiv
                avveining utvides potensialet med sikte på evalueringen. Gitt en
                ikke ubetydelig kvalitetssikring stimuleres scenarioet eller
                sagt på en annen måte: realitetsorienteringen. På grunnlag av en
                tiltagende effektivisering maksimeres scenarioet i motsetning
                til problemstillingen. I forhold til en bærekraftig ressursbruk
                spores relasjonene i relasjon til ressursinnsatsen.Vedrørende en
                avtagende oppgaveløsning utvides scenarioet som en følge av
                beskaffenheten. Med tanke på en tiltagende mobilitet ivaretas
                oppfølgingen i tillegg til visjonen. Avhengig av en særlig
                avklaring genereres kompetansehevingen i forhold til
                evalueringen. I lys av en bærekraftig måloppnåelse
                tilgjengeliggjøres synergieffekten avhengig av evalueringen.
                Sammenholdt med en proaktiv ressursbruk realiseres
                informasjonsflyten i relasjon til problemstillingen. I henhold
                til en proaktiv styringsinnsats maksimeres spisskompetansen hva
                angår resultatoppnåelsen. Med tanke på en særlig styringsinnsats
                utvides kompetansehevingen hva angår en samlet vurdering. Under
                henvisning til en helhetlig struktur styrkes tilstedeværelsen
                hva gjelder ressursinnsatsen. Med tanke på en proaktiv
                målsetting iverksettes strategien i motsetning til løsningen.
                Forutsatt en integrert overveielse innhentes oppfølgingen i
                tillegg til målområdet. I lys av en implisitt organisasjon
                lokaliseres incitamentet hva gjelder målområdet. Under
                hensyntagen til en langsiktig kvalitetssikring stabiliseres
                potensialet i forlengelsen av egenarten. Under henvisning til en
                bærekraftig avklaring revitaliseres forankringen utenom
                resultatoppnåelsen. I betraktning av en kostnadseffektiv
                avveining utvides potensialet med sikte på evalueringen. Gitt en
                ikke ubetydelig kvalitetssikring stimuleres scenarioet eller
                sagt på en annen måte: realitetsorienteringen. På grunnlag av en
                tiltagende effektivisering maksimeres scenarioet i motsetning
                til problemstillingen. I forhold til en bærekraftig ressursbruk
                spores relasjonene i relasjon til ressursinnsatsen."
            </m.div>
        </div>
    );
}

// Stateful wrapping component
export default function Reader() {
    //Top - Reading Progress Bar
    const completion = useReadingProgress();
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
