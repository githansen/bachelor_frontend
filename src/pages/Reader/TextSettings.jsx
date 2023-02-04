import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ReactComponent as IconLeftTextAlign } from '@/assets/icons/IconLeftTextAlign.svg';
import { ReactComponent as IconJustifyTextAlign } from '@/assets/icons/IconJustifyTextAlign.svg';
import { ReactComponent as IconRightTextAlign } from '@/assets/icons/IconRightTextAlign.svg';
import { ReactComponent as IconCenterTextAlign } from '@/assets/icons/IconCenterTextAlign.svg';
import { ReactComponent as IconMonospaceFont } from '@/assets/icons/IconMonospaceFont.svg';
import { ReactComponent as IconSansSerifFont } from '@/assets/icons/IconSansSerifFont.svg';
import { ReactComponent as IconSerifFont } from '@/assets/icons/IconSerifFont.svg';
import { ReactComponent as IconStandardFont } from '@/assets/icons/IconStandardFont.svg';
import { ReactComponent as IconBigText } from '@/assets/icons/IconBigText.svg';
import { ReactComponent as IconSmallText } from '@/assets/icons/IconSmallText.svg';
import { ReactComponent as IconTextSizeRefresh } from '@/assets/icons/IconTextSizeRefresh.svg';

export default function TextSettings({ fontFamily, setFontFamily, setFontSize, alignText, setAlignText }) {
    const textAlign = [
        {
            name: 'Fyll',
            alignTextChosen: 'justify',
            icon: IconJustifyTextAlign,
        },
        {
            name: 'Midstill',
            alignTextChosen: 'center',
            icon: IconCenterTextAlign,
        },
        {
            name: 'Venstrejuster',
            alignTextChosen: 'left',
            icon: IconLeftTextAlign,
        },
        {
            name: 'Høyrejuster',
            alignTextChosen: 'right',
            icon: IconRightTextAlign,
        },
    ];

    const fontTypes = [
        {
            name: 'Standard',
            fontTypeChosen: 'Avenir',
            icon: IconStandardFont,
        },
        {
            name: 'Sans Serif',
            fontTypeChosen: 'Arial',
            icon: IconSansSerifFont,
        },
        {
            name: 'Serif',
            fontTypeChosen: 'Times New Roman',
            icon: IconSerifFont,
        },
        {
            name: 'Monospace',
            fontTypeChosen: 'Monospace',
            icon: IconMonospaceFont,
        },
    ];

    const textEdit = [
        {
            name: 'Forstørr',
            action: () => setFontSize((prevSize) => Math.min(prevSize + 1, 28)),
            icon: IconBigText,
        },
        {
            name: 'Reduser',
            action: () => setFontSize((prevSize) => Math.max(prevSize - 1, 24)),
            icon: IconSmallText,
        },
        {
            name: 'Tilbakestill',
            action: () => {
                setFontSize(24);
                setFontFamily('Avenir');
                setAlignText('left');
            },
            icon: IconTextSizeRefresh,
        },
    ];

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-[-115%]"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-[-115%]"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[30rem] -translate-x-[55%] transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-2xl ring-opacity-5 bg-secondary border-4 border-secondary">
                    <h6 className="text-dark mt-8 text-left pl-4 uppercase font-bold text-small">
                        Velg skrifttype
                    </h6>
                    <div className="relative grid gap-8  p-7 grid-cols-2">
                        {fontTypes.map((item) => (
                            <a
                                key={item.name}
                                onClick={() =>
                                    setFontFamily(item.fontTypeChosen)
                                }
                                className={`${
                                    fontFamily === item.fontTypeChosen
                                        ? 'bg-secondary-soft'
                                        : 'bg-secondary-darksoft'
                                } -m-3 hover:bg-secondary-soft flex text-black items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <h6 className="text-dark mt-4 text-left pl-4 uppercase font-bold text-small">
                        Juster tekst
                    </h6>
                    <div className="relative grid gap-8   p-7 grid-cols-2">
                        {textAlign.map((item) => (
                            <a
                                key={item.name}
                                onClick={() =>
                                    setAlignText(item.alignTextChosen)
                                }
                                className={`${
                                    alignText === item.alignTextChosen
                                        ? 'bg-secondary-soft'
                                        : 'bg-secondary-darksoft'
                                } -m-3 hover:bg-secondary-soft flex text-black items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <h6 className="text-dark mt-4 text-left pl-4 uppercase font-bold text-small">
                        Endre størrelse
                    </h6>
                    <div className="relative grid gap-8 p-7 grid-cols-3">
                        {textEdit.map((item) => (
                            <a
                                key={item.name}
                                onClick={item.action}
                                className={`-m-3 hover:bg-secondary-soft  flex text-black w-fit items-center rounded-lg pr-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-2">
                                    <p className="text-small font-medium text-gray-900">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    );
}
