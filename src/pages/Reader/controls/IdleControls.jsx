import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as IconTextOptions } from '@/assets/icons/IconTextOptions.svg';
import { ReactComponent as IconRefresh } from '@/assets/icons/IconRefresh.svg';
import TextSettings from '../TextSettings';
import ResetModal from '../ResetModal';

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
        <div className="flex flex-row justify-between w-full trasition">
            <div className="text-left self-center flex flex-col">
                <h3 className="text-h3 font-semibold text-white">
                    Klar til opptak?
                </h3>
                <p className="text-p text-secondary">Estimert lesetid: 2 min</p>
            </div>

            <div className="flex flex-row place-items-center self-center">
                <button
                    className="px-5 py-4 inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-secondary text-black border-secondary hover:bg-secondary-soft  transition duration-150 ease-in-out"
                    onClick={() => setReaderState('recording')}
                >
                    <IconMic className="w-6 h-6" />
                    <b>Start opptak</b>
                </button>
            </div>

            <div className="flex flex-row place-items-center self-center gap-4">
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
                            <div className="w-10 h-4 bg-secondary-soft rounded-full shadow-inner"></div>
                            <div className="dot absolute w-6 h-6 bg-secondary rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>
                    </label>
                </div>
                <div>
                    <Popover className="relative">
                        <Popover.Button
                            type="button"
                            className={`px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out`}
                        >
                            <IconTextOptions className="w-6 h-6" />
                            Endre tekst
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
                        className="px-4 py-2 font-medium inline-flex gap-2 border-solid border-2 border-sky-500 rounded-full bg-dark text-white border-secondary hover:bg-white hover:text-black hover:border-white transition duration-150 ease-in-out"
                    >
                        <IconRefresh className="w-6 h-6" />
                        Ny tekst
                    </button>
                </div>
            </div>
            <ResetModal
                open={resetModalOpen}
                onClose={() => setResetModalOpen(false)}
                onReset={() => {
                    /* TODO: Not implemented yet */
                }}
            />
        </div>
    );
}
