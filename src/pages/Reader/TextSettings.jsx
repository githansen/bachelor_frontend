import { useEffect, useState, Fragment } from 'react';
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
import { ReactComponent as ReaderColorChange } from '@/assets/icons/ReaderColorChange.svg';

export default function TextSettings({
    fontFamily,
    setFontFamily,
    setFontSize,
    alignText,
    setAlignText,
    setStyleBgColor,
    stylecolorfont,
    setStyleColorFont,
}) {
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

    var [fontSizeTopLimit, setFontSizeTopLimit] = useState(28);
    var [fontSizeBottomLimit, setFontSizeBottomLimit] = useState(20);
    var [fontSizeDefault, setFontSizeDefault] = useState(20);
    useEffect(() => {
        if (windowSize === 'XS') {
            setFontSizeTopLimit(28);
            setFontSizeBottomLimit(16);
            setFontSizeDefault(20);
        } else if (windowSize === 'SM') {
            setFontSizeTopLimit(32);
            setFontSizeBottomLimit(18);
            setFontSizeDefault(22);
        } else if (
            windowSize === 'MD' ||
            windowSize === 'LG' ||
            windowSize === 'XL'
        ) {
            setFontSizeTopLimit(34);
            setFontSizeBottomLimit(20);
            setFontSizeDefault(24);
        } else {
            setFontSizeTopLimit(34);
            setFontSizeBottomLimit(20);
            setFontSizeDefault(24);
        }
    }, [windowSize]);

    const textEdit = [
        {
            name: 'Forstørr',
            action: () =>
                setFontSize((prevSize) =>
                    Math.min(prevSize + 1, fontSizeTopLimit)
                ),
            icon: IconBigText,
        },
        {
            name: 'Reduser',
            action: () =>
                setFontSize((prevSize) =>
                    Math.max(prevSize - 1, fontSizeBottomLimit)
                ),
            icon: IconSmallText,
        },
        {
            name: 'Tilbakestill',
            action: () => {
                setFontSize(fontSizeDefault);
                setFontFamily('Avenir');
                setAlignText('left');
            },
            icon: IconTextSizeRefresh,
        },
    ];

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
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 xs:translate-y-[-119%] sm:translate-y-[-113%]"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 xs:translate-y-[-119%] sm:translate-y-[-113%]"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[30rem] xs:-translate-x-[10%] sm:-translate-x-[5%] md:-translate-x-[95%] lg:-translate-x-[85%] transform px-4 sm:px-0 xs:max-w-sm lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-2xl ring-opacity-5 bg-solskinn border-4 border-solskinn">
                    <h6 className="text-skumring mt-8 text-left pl-4 uppercase font-bold text-small xs:text-center">
                        Velg skrifttype
                    </h6>
                    <div className="relative grid gap-8 p-7 xs:justify-items-center xs:grid-cols-4 sm:grid-cols-2">
                        {fontTypes.map((item) => (
                            <a
                                key={item.name}
                                onClick={() =>
                                    setFontFamily(item.fontTypeChosen)
                                }
                                className={`${
                                    fontFamily === item.fontTypeChosen
                                        ? 'bg-paskeegg'
                                        : 'bg-gull'
                                } -m-3 hover:bg-paskeegg flex text-natt items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-fred sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="xs:hidden md:block ml-4">
                                    <p className="text-sm font-medium text-skumring">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <h6 className="text-skumring mt-4 text-left pl-4 uppercase font-bold text-small xs:text-center">
                        Juster tekst
                    </h6>
                    <div className="relative grid gap-8 p-7 xs:justify-items-center xs:grid-cols-4 sm:grid-cols-2">
                        {textAlign.map((item) => (
                            <a
                                key={item.name}
                                onClick={() =>
                                    setAlignText(item.alignTextChosen)
                                }
                                className={`${
                                    alignText === item.alignTextChosen
                                        ? 'bg-paskeegg'
                                        : 'bg-gull'
                                } -m-3 hover:bg-paskeegg flex text-natt items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-fred sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="xs:hidden md:block ml-4">
                                    <p className="text-sm font-medium text-skumring">
                                        {item.name}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <h6 className="text-skumring mt-4 text-left pl-4 uppercase font-bold text-small xs:text-center">
                        Endre størrelse
                    </h6>
                    <div className="relative grid gap-8 p-7 xs:justify-items-center xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
                        <button
                            type="button"
                            onClick={changeStyleColor}
                            className={`md:hidden -m-3 hover:bg-gull flex text-natt w-fit items-center rounded-lg pr-3 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-fred sm:h-12 sm:w-12">
                                <ReaderColorChange />
                            </div>
                            <div className="xs:hidden ml-2">
                                <p className="text-small font-medium text-skumring">
                                    Fargeendring
                                </p>
                            </div>
                        </button>
                        {textEdit.map((item) => (
                            <button
                                key={item.name}
                                onClick={item.action}
                                className={`-m-3 hover:bg-gull flex text-natt w-fit items-center rounded-lg pr-3 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-fred sm:h-12 sm:w-12">
                                    <item.icon aria-hidden="true" />
                                </div>
                                <div className="xs:hidden ml-2">
                                    <p className="text-small font-medium text-skumring">
                                        {item.name}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    );
}
