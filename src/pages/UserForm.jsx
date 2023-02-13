//React library
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Select, { components } from 'react-select';
//Shared components
import Footer from '@/components/shared/Footer';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import UserFormIcon from '@/assets/img/ThreeDeeGraphic/UserForm.png';

function SelectInput({ options, name, selected, onChange }) {
    const selectStyle = {
        control: (base, state) => {
            let border = '2px solid #f2f2f2';

            if (state.isSelected) {
                border = '2px solid #FFD039';
            }
            if (state.isFocused) {
                border = '2px solid #FFD039';
            }

            return {
                ...base,
                border,
                boxShadow: 'none',
                '&:hover': {
                    border: '2px solid #FFD039',
                },
            };
        },
        menuList: (provided) => ({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0,
            boxShadow: 'none',
            border: '1.5px solid #FFD039',
            borderRadius: '5px',
            zIndex: 999,
        }),
        control: (styles, state) => ({
            ...styles,
            boxShadow: 'none',
            background: state.hasValue ? '#FFEFB6' : '#FFFFFF',
            border: '2px solid #FFD039',
            outline: '0',
            color: state.hasValue ? '#FFFFFF' : '#000000',
            zIndex: 100,
            '&:hover': {
                cursor: 'pointer',
            },
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#FFD039',
        }),
        indicatorSeparator: (base) => {
            return {
                ...base,
                display: 'none',
            };
        },
    };

    const Option = (props) => {
        const {
            children,
            className = '',
            cx,
            isDisabled,
            isFocused,
            isSelected,
            innerProps,
        } = props;
        return (
            <div
                className={cx(
                    {
                        option: true,
                        'option--is-disabled': isDisabled,
                        'option--is-focused': isFocused,
                        'option--is-selected': isSelected,
                    },
                    `${className} defaultSelectOptionsStyle`
                )}
                {...innerProps}
            >
                {children}
            </div>
        );
    };
    const NoOptionsMessage = (props) => {
        return (
            <components.NoOptionsMessage {...props}>
                <span>Ingen resultat...</span>
            </components.NoOptionsMessage>
        );
    };

    // <label> element has to stay for accessibility purposes, however
    // it can be hidden with the className "sr-only"
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="
            w-10/12 
            mx-auto"
        >
            <div className="flex flex-col m-3">
                <h5
                    htmlFor={name}
                    className="
                        font-normal 
                        xs:text-xsh5 
                        sm:text-smh5 
                        xl:text-xlh5 
                        text-h5
                        text-skumring"
                >
                    {name}
                </h5>
                <Select
                    placeholder={<div>Ikke valgt...</div>}
                    name={name}
                    options={options}
                    value={selected}
                    isClearable={false}
                    components={{ NoOptionsMessage, Option }}
                    className="z-50 py-1 text-left"
                    styles={selectStyle}
                    onChange={onChange}
                />
            </div>
        </m.div>
    );
}

function Stepper({ step, totalSteps }) {
    const before =
        'before:border-secondary-soft before:border before:w-[92%] before:content-"" before:absolute before:top-1/2 before:-translate-y-1/2 before:z-[1]';
    return (
        <m.div
            initial={{ y: '50%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`flex justify-center items-center gap-20 mb-2 relative ${before}`}
        >
            {Array(totalSteps)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={`w-5 h-5 z-[2] rounded-full m-1 transition-all ${
                            i <= step ? 'bg-solskinn' : 'bg-fred'
                        } border-secondary border-2`}
                    />
                ))}
        </m.div>
    );
}

export default function PageUserForm() {
    const ageOptions = [
        { value: '1', label: '18-29' },
        { value: '2', label: '30-39' },
        { value: '3', label: '40-49' },
        { value: '4', label: '50-59' },
        { value: '5', label: '60+' },
    ];
    const genderOptions = [
        { value: 'mann', label: 'Mann' },
        { value: 'kvinne', label: 'Kvinne' },
        { value: 'annet', label: 'Annet' },
    ];
    const languageOptions = [
        { value: 'norsk', label: 'Norsk' },
        { value: 'arabisk', label: 'Arabisk' },
        { value: 'alabansk', label: 'Albansk' },
    ];
    const dialectOptions = [
        { value: 'ostlandsk', label: 'Østlandsk' },
        { value: 'vestlandsk', label: 'Vestlandsk' },
        { value: 'trondersk', label: 'Trøndersk' },
        { value: 'nordnorsk', label: 'Nordnorsk' },
        { value: 'annet', label: 'Annet' },
    ];

    // Selected options
    const [gender, setGender] = useState(null);
    const [ageGroup, setAgeGroup] = useState(null);
    const [language, setLanguage] = useState(null);
    const [dialect, setDialect] = useState(null);

    const [step, setStep] = useState(0);
    const steps = [
        <SelectInput
            name="Velg et kjønn"
            options={genderOptions}
            selected={gender}
            onChange={(value) => setGender(value)}
        />,
        <SelectInput
            name="Velg aldersgruppe"
            options={ageOptions}
            selected={ageGroup}
            onChange={(value) => setAgeGroup(value)}
        />,
        <div className="w-full mx-auto">
            <SelectInput
                name="Velg morsmål"
                options={languageOptions}
                selected={language}
                onChange={(value) => setLanguage(value)}
            />
            {language?.value === 'norsk' && (
                <SelectInput
                    name="Velg dialekt"
                    options={dialectOptions}
                    selected={dialect}
                    onChange={(value) => setDialect(value)}
                />
            )}
        </div>,
    ];

    if (step >= steps.length) {
        return <Navigate to="/les" />;
    } else {
        return (
            <div>
                <main className="pt-10 mx-5 gap-4 sm:pt-22 sm:mx-14 sm:gap-6 md:pt-26 md:mx-20 md:gap-10 lg:min-h-[55rem] lg:max-w-6xl lg:mx-auto">
                    <div className="xs:text-center flex flex-col place-items-center xs:my-[5rem] sm:my-[6rem] md:my-[7rem] xl:my-[10rem]">
                        <m.img
                            initial={{ y: '-25%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            src={UserFormIcon}
                            className="xs:h-[12rem] sm:h-[12rem] md:h-[13rem] lg:h-[15rem] h-[15rem] mb-10"
                        ></m.img>
                        <Stepper step={step} totalSteps={steps.length} />

                        <m.h2
                            initial={{ y: '50%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="
                            font-fet 
                            xs:text-xsh2 
                            sm:text-smh2 
                            xl:text-xlh2 
                            text-h2
                            text-skumring"
                        >
                            Først, et par spørsmål
                        </m.h2>

                        <div className="xs:min-w-[23rem] sm:min-w-[25rem] md:min-w-[26rem] mt-4 mb-0">
                            {steps[step]}
                        </div>

                        <m.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            onClick={() => setStep((prev) => prev + 1)}
                            className="
                            font-fet 
                            xs:text-xsknapp 
                            sm:text-smknapp 
                            xl:text-xlknapp 
                            text-knapp 
                            text-natt 
                            bg-solskinn 
                            xs:w-full 
                            w-fit 
                            transScale 
                            px-8 
                            py-5 
                            mb-2 
                            mt-2 
                            rounded 
                            inline-flex 
                            justify-center 
                            items-center 
                            gap-1"
                        >
                            Gå videre
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </m.button>
                        {step > 0 && (
                            <m.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                onClick={() =>
                                    setStep((prev) => Math.max(prev - 1, 0))
                                }
                                className="
                                font-fet
                                xs:text-xsknappliten 
                                sm:text-smknappliten 
                                xl:text-xlknappliten 
                                text-knappliten 
                                text-metall 
                                hover:text-skumring 
                                bg-mane 
                                hover:bg-paskeegg
                                border-2
                                border-mane 
                                hover:border-solskinn
                                xs:w-full 
                                w-fit 
                                px-11 
                                py-3 
                                mt-2
                                mb-2
                                rounded 
                                transition 
                                ease-in-out 
                                duration-200"
                            >
                                Tilbake
                            </m.button>
                        )}
                        <div className="max-w-md mt-5 text-center">
                            <m.small
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="
                                font-harstra 
                                xs:text-xsliten 
                                sm:text-smliten
                                md:text-xlliten 
                                lg:text-xlliten  
                                xl:text-xlliten 
                                text-liten
                                text-stein 
                                italic"
                            >
                                Vi samler ikke inn noen personlige data fra deg,
                                denne infoen blir kun brukt til å systematisere
                                data.
                            </m.small>
                        </div>
                    </div>
                </main>
                <div></div>
                <Footer />
            </div>
        );
    }
}
