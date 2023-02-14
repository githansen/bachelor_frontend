import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as IconTextOptions } from '@/assets/icons/IconTextOptions.svg';
import { ReactComponent as IconRefresh } from '@/assets/icons/IconRefresh.svg';
import TextSettings from '../TextSettings';
import ResetModal from '../ResetModal';
import { motion as m } from 'framer-motion';

export default function IdleControls({
    setReaderState,
    setStyleBgColor,
    stylecolorfont,
    setStyleColorFont,
    setFontSize,
    fontFamily,
    setFontFamily,
    alignText,
    setAlignText,
    reloadText,
}) {
    // Ny tekst modal
    let [resetModalOpen, setResetModalOpen] = useState(false);

    //Switch between Dark/Light theme
    const changeStyleColor = () => {
        if (stylecolorfont == '#ffffff') {
            setStyleColorFont('#000000');
            setStyleBgColor('bg-special-light');
        }
        if (stylecolorfont == '#000000') {
            setStyleColorFont('#ffffff');
            setStyleBgColor('bg-special-dark');
        }
    };

    return (
        <m.div
            initial={{ y: '25%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="
            grid 
            grid-cols-3 
            w-full 
            trasition 
            md:min-h-[5.5rem]"
        >
            <div className="text-left place-self-start self-center flex flex-col">
                <h3 className="text-h3 font-semibold text-fred">
                    Klar til opptak?
                </h3>
                <p className="text-p text-solskinn">Estimert lesetid: 2 min</p>
            </div>

            <div className="flex flex-row place-self-center place-items-center self-center">
                <button
                    className="px-5 py-4 transScale inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-paskeegg text-natt border-solskinn hover:bg-solskinn  transition duration-150 ease-in-out"
                    onClick={() => setReaderState('recording')}
                >
                    <IconMic className="w-6 h-6" />
                    <b>Start opptak</b>
                </button>
            </div>

            <div className="flex flex-row place-items-center place-self-end self-center gap-4">
                <div className="mr-2">
                    <label
                        htmlFor="toogle"
                        className="flex items-center cursor-pointer"
                    >
                        <div className="relative">
                            <input
                                id="toogle"
                                type="checkbox"
                                className="fancyRadioBtn sr-only"
                                onClick={changeStyleColor}
                            />
                            <div className="w-10 h-4 bg-paskeegg rounded-full shadow-inner"></div>
                            <div className="dot absolute w-6 h-6 bg-solskinn rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                    </label>
                </div>
                <div>
                    <Popover className="relative">
                        <Popover.Button
                            type="button"
                            className={`lg:px-4 md:px-3 lg:py-2 md:py-3 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out`}
                        >
                            <IconTextOptions className="w-6 h-6" />
                            <span className="md:hidden lg:block">
                                Endre tekst
                            </span>
                        </Popover.Button>
                        <TextSettings
                            fontFamily={fontFamily}
                            setFontFamily={setFontFamily}
                            setFontSize={setFontSize}
                            alignText={alignText}
                            setAlignText={setAlignText}
                        />
                    </Popover>
                </div>

                <div>
                    <button
                        onClick={() => setResetModalOpen(true)}
                        className="lg:px-4 md:px-3 lg:py-2 md:py-3 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-skumring text-fred border-solskinn hover:bg-fred hover:text-natt hover:border-fred transition duration-150 ease-in-out"
                    >
                        <IconRefresh className="w-6 h-6" />
                        <span className="md:hidden lg:block">Ny tekst</span>
                    </button>
                </div>
            </div>
            <ResetModal
                open={resetModalOpen}
                onClose={() => setResetModalOpen(false)}
                onReset={() => {
                    reloadText();
                    setResetModalOpen(false);
                }}
            />
        </m.div>
    );
}
