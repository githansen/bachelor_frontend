import { useEffect, useState } from 'react';
import HeaderMinimal from '@/components/shared/HeaderMinimal';
import HeaderMinimalSmall from '@/components/shared/HeaderMinimalSmall';
import '@/styles/audioplayer.css';
import { useTimer } from 'use-timer';
import CompletedControls from './controls/CompletedControls';
import RecordingControls from './controls/RecordingControls';
import IdleControls from './controls/IdleControls';
import IdleControlsSmall from './controls/IdleControlsSmall';

// Main text to be read by user
function TextPanel({ state, fontColor, fontsize, fontfamily, alignText }) {
    const txtColor = {
        idle: `${fontColor}`,
        recording: `${fontColor}`,
        completed: `${fontColor}`,
    }[state];

    return (
        <div>
            <div
                style={{
                    fontSize: `${fontsize}px`,
                    fontFamily: `${fontfamily}`,
                    color: `${txtColor}`,
                    textAlign: `${alignText}`,
                }}
                className={`rounded-lg leading-loose xs:p-0 sm:p-0 md:p-8 bordser-2 transition-colors text-justify duration-400`}
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
                spores relasjonene i relasjon til ressursinnsatsen."
            </div>
        </div>
    );
}

// Stateful wrapping component
export default function Reader() {
    // Recording
    const [state, setState] = useState('idle'); // idle | recording | completed
    const { time, start, reset } = useTimer();

    // Switch light/dark theme
    const [stylebgcolor, setStyleBgColor] = useState('bg-special-light');
    const [stylecolorfont, setStyleColorFont] = useState('#000000');

    // TextEdit
    const [fontsize, setFontSize] = useState(15);
    const [fontfamily, setFontFamily] = useState('Avenir');
    const [alignText, setAlignText] = useState('center');

    // Record when state enters recording
    useEffect(() => {
        if (state === 'recording') {
            start();
        } else {
            reset();
        }
    }, [state]);

    const renderControls = () => {
        switch (state) {
            case 'completed':
                return <CompletedControls setReaderState={setState} />;

            case 'recording':
                return (
                    <RecordingControls setReaderState={setState} time={time} />
                );

            case 'idle':
            default:
                return (
                    <div className='w-full'>
                        <div className='xs:hidden sm:hidden md:block'>
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
                        <div className='xs:block sm:block md:hidden'>
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
        <div className={`${stylebgcolor} xs:px-4 xs:py-24 sm:py-32 sm:px-4 md:py-0 md:px-10`}>
            <div className='w-full'>
                <div className='xs:hidden sm:hidden md:block'>
                    <HeaderMinimal />
                </div>
                <div className='xs:block sm:block md:hidden'>
                    <HeaderMinimalSmall />
                </div>
            </div>
            <div className="min-h-screen px-10 pt-0 pb-20 flex flex-col place-items-center">
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
					md:p-5
                    xs:py-3
                    xs:px-5
                    sm:py-3
                    sm:px-5"
            >
                <div className="h-30 flex justify-center ">
                    {renderControls()}
                </div>
            </footer>
        </div>
    );
}
