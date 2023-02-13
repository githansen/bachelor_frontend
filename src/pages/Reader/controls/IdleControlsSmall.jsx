import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ReactComponent as IconMic } from '@/assets/icons/IconMic.svg';
import { ReactComponent as IconTextOptions } from '@/assets/icons/IconTextOptions.svg';
import { ReactComponent as IconRefresh } from '@/assets/icons/IconRefresh.svg';
import TextSettings from '../TextSettings';
import ResetModal from '../ResetModal';

export default function IdleControlsSmall({
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

    return (
        <div className="grid grid-cols-3 items-center w-full trasition">
            <div className="flex flex-col justify-self-start">
                <Popover className="relative">
                    <Popover.Button
                        type="button"
                        className="px-3 py-3 self-center border-solid border-2 rounded-full bg-skumring text-fred border-solskinn hover:bg-paskeegg hover:text-skumring transition ease-in-out"
                    >
                        <IconTextOptions className="w-5 h-5" />
                    </Popover.Button>
                    <TextSettings
                        fontFamily={fontFamily}
                        setFontFamily={setFontFamily}
                        setFontSize={setFontSize}
                        alignText={alignText}
                        setAlignText={setAlignText}
                        setStyleBgColor={setStyleBgColor}
                        stylecolorfont={stylecolorfont}
                        setStyleColorFont={setStyleColorFont}
                    />
                </Popover>
            </div>
            <div className="text-center flex flex-col">
                <button
                    className="px-4 py-4 self-center border-2 rounded-full bg-solskinn text-natt border-solskinn hover:bg-paskeegg transition ease-in-out duration-150 "
                    onClick={() => setReaderState('recording')}
                >
                    <IconMic className="w-6 h-6" />
                </button>
            </div>
            <div className="flex flex-col justify-self-end">
                <button
                    onClick={() => setResetModalOpen(true)}
                    className="px-3 py-3 self-center border-solid border-2 rounded-full bg-skumring text-fred border-solskinn hover:bg-paskeegg hover:text-skumring transition ease-in-out"
                >
                    <IconRefresh className="w-5 h-5" />
                </button>
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
