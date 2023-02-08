import Layout from '../components/shared/Layout';

export default function Overskrifter() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    
                    <h1 className="xs:text-xsh1 sm:text-smh1 md:text-mdh1 lg:text-lgh1 xl:text-xlh1 text-h1 mb-2">
                        Overskrift 1
                    </h1>

                    <h2 className="xs:text-xsh2 sm:text-smh2 md:text-mdh2 lg:text-lgh2 xl:text-xlh2 text-h2">
                        Overskrift 2
                    </h2>

                    <h3 className="xs:text-xsh3 sm:text-smh3 md:text-mdh3 lg:text-lgh3 xl:text-xlh3 text-h3">
                        Overskrift 3
                    </h3>

                    <h4 className="xs:text-xsh4 sm:text-smh4 md:text-mdh4 lg:text-lgh4 xl:text-xlh4 text-h4">
                        Overskrift 4
                    </h4>

                    <h5 className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 lg:text-lgh5 xl:text-xlh5 text-h5">
                        Overskrift 5
                    </h5>
                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p">
                        Sed finibus quam quam, eu aliquet risus faucibus sed.
                        Nam risus dolor, aliquet eu urna ut, laoreet laoreet
                        ligula. Integer gravida iaculis odio, ac placerat erat
                        vehicula eget. Mauris eget tincidunt ligula.
                    </p>

                    <small className="xs:text-xssmall sm:text-smsmall md:text-mdsmall lg:text-lgsmall xl:text-xlsmall text-small  text-stein italic">
                        Vi samler ikke inn noen personlige data fra deg, denne
                        infoen blir kun brukt til å systematisere data.
                    </small>

                    <button
                        onClick={() => navigate('/intro')}
                        className="xs:w-full w-48 transScale bg-solskinn px-4 py-4 mb-2 text-natt mt-2 rounded inline-flex justify-center items-center gap-2 xs:text-xsknapp sm:text-smknapp md:text-mdknapp lg:text-lgknapp xl:text-xlknapp text-knapp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
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
                        className="xs:w-full w-40 xs:text-xsknappliten sm:text-smknappliten md:text-mdknappliten lg:text-lgknappliten xl:text-xlknappliten text-knappliten bg-mane px-5 py-2 mt-2 text-natt rounded border-2 border-mane hover:bg-paskeegg hover:border-solskinn transition ease-in-out duration-200"
                    >
                        Avbryt
                    </button>
                </div>
            </div>
        </Layout>
    );
}
