import Layout from '../components/shared/Layout';

export default function Overskrifter() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    <h1
                        className="
                        text-fet 
                        xs:text-xsh1 
                        sm:text-smh1 
                        xl:text-xlh1 
                        text-h1
                        text-skumring"
                    >
                        Dette er en overskrift 1 <br /> med et linjeskift
                    </h1>

                    <h2
                        className="
                        font-fet 
                        xs:text-xsh2 
                        sm:text-smh2 
                        xl:text-xlh2 
                        text-h2
                        text-skumring"
                    >
                        Dette er en overskrift 2 <br /> med et linjeskift
                    </h2>

                    <h3
                        className="
                        font-fet 
                        xs:text-xsh3 
                        sm:text-smh3 
                        xl:text-xlh3 
                        text-h3
                        text-skumring"
                    >
                        Dette er en overskrift 3 <br /> med et linjeskift
                    </h3>

                    <h4
                        className="
                        font-fet 
                        xs:text-xsh4 
                        sm:text-smh4 
                        xl:text-xlh4 
                        text-h4
                        text-skumring"
                    >
                        Dette er en overskrift 4 <br /> med et linjeskift
                    </h4>

                    <h5
                        className="
                        font-fet 
                        xs:text-xsh5 
                        sm:text-smh5 
                        xl:text-xlh5 
                        text-h5
                        text-skumring"
                    >
                        Dette er en overskrift 5 <br /> med et linjeskift
                    </h5>

                    <h6
                        className="
                        font-fet 
                        xs:text-xsh6 
                        sm:text-smh6 
                        xl:text-xlh6 
                        text-h6
                        text-skumring"
                    >
                        Dette er en overskrift 6 <br /> med et linjeskift
                    </h6>
                    <p
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring"
                    >
                        Sed finibus quam quam, eu aliquet risus faucibus sed.
                        Nam risus dolor, aliquet eu urna ut, laoreet laoreet
                        ligula. Integer gravida iaculis odio, ac placerat erat
                        vehicula eget. Mauris eget tincidunt ligula.Sed finibus
                        quam quam, eu aliquet risus faucibus sed. Nam risus
                        dolor, aliquet eu urna ut, laoreet laoreet ligula.
                        Integer gravida iaculis odio, ac placerat erat vehicula
                        eget. Mauris eget tincidunt ligula.Sed finibus quam
                        quam, eu aliquet risus faucibus sed. Nam risus dolor,
                        aliquet eu urna ut, laoreet laoreet ligula. Integer
                        gravida iaculis odio, ac placerat erat vehicula eget.
                        Mauris eget tincidunt ligula.Sed finibus quam quam, eu
                        aliquet risus faucibus sed. Nam risus dolor, aliquet eu
                        urna ut, laoreet laoreet ligula. Integer gravida iaculis
                        odio, ac placerat erat vehicula eget. Mauris eget
                        tincidunt ligula.Sed finibus quam quam, eu aliquet risus
                        faucibus sed. Nam risus dolor, aliquet eu urna ut,
                        laoreet laoreet ligula. Integer gravida iaculis odio, ac
                        placerat erat vehicula eget. Mauris eget tincidunt
                        ligula.Sed finibus quam quam, eu aliquet risus faucibus
                        sed. Nam risus dolor, aliquet eu urna ut, laoreet
                        laoreet ligula. Integer gravida iaculis odio, ac
                        placerat erat vehicula eget. Mauris eget tincidunt
                        ligula.Sed finibus quam quam, eu aliquet risus faucibus
                        sed. Nam risus dolor, aliquet eu urna ut, laoreet
                        laoreet ligula. Integer gravida iaculis odio, ac
                        placerat erat vehicula eget. Mauris eget tincidunt
                        ligula.Sed finibus quam quam, eu aliquet risus faucibus
                        sed. Nam risus dolor, aliquet eu urna ut, laoreet
                        laoreet ligula. Integer gravida iaculis odio, ac
                        placerat erat vehicula eget. Mauris eget tincidunt
                        ligula.Sed finibus quam quam, eu aliquet risus faucibus
                        sed. Nam risus dolor, aliquet eu urna ut, laoreet
                        laoreet ligula. Integer gravida iaculis odio, ac
                        placerat erat vehicula eget. Mauris eget tincidunt
                        ligula.
                    </p>

                    <small
                        className="
                        font-harstra 
                        xs:text-xsliten 
                        sm:text-smliten 
                        xl:text-xlliten 
                        text-liten
                        text-stein 
                        italic"
                    >
                        Vi samler ikke inn noen personlige data fra deg, denne
                        infoen blir kun brukt til å systematisere data.
                    </small>

                    <button
                        onClick={() => navigate('/intro')}
                        className="
                        font-feteste 
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-play"
                        >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Sett i gang
                    </button>

                    <button
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
                        Avbryt
                    </button>
                </div>
            </div>
        </Layout>
    );
}
