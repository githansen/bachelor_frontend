//React library
import { Link } from 'react-router-dom';
//Shared components
import Layout from '@/components/shared/Layout';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import HomePlaceholder2 from '@/assets/img/ThreeDeeGraphic/PrivacyGraphic.webp';

export default function Privacy() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    <div className="flex xs:flex-col sm:flex-col md:flex-row gap-10 mb-10">
                        <m.div
                            initial={{ y: '15%' }}
                            animate={{
                                y: '0',
                                borderRadius: ['5%', '15%'],
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="
                                bg-pattern-blue 
                                basis-1/3 
                                flex 
                                w-full 
                                bg-gradient-to-b from-drape to-bolge 
                                rounded-xl 
                                place-content-center"
                        >
                            <img
                                src={HomePlaceholder2}
                                className="xs:h-[12rem] sm:h-[12rem] md:h-[13rem] lg:h-[15rem] xl:h-[20rem] m-10"
                            />
                        </m.div>

                        <div className="basis-2/3 place-self-center">
                            <m.h1
                                initial={{ y: '25%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="
                                font-fet 
                                xs:text-xsh1 
                                sm:text-smh1 
                                xl:text-xlh1 
                                text-h1
                                text-skumring
                                mb-5"
                            >
                                Personvern
                            </m.h1>

                            <m.h4
                                initial={{ y: '25%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeOut',
                                    delay: 0.3,
                                }}
                                className="
                                font-normal 
                                xs:text-xsh4 
                                sm:text-smh4 
                                xl:text-xlh4 
                                text-h4
                                text-metall"
                            >
                                Når du bruker tjenester fra oss, gir du oss
                                tilgang til informasjon om deg. Vi innser at
                                dette er et stort ansvar, og vi jobber hardt for
                                å beskytte informasjonen din og gi deg kontroll
                                over den.
                            </m.h4>
                        </div>
                    </div>

                    <m.p
                        initial={{ y: '25%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
                        Sed finibus quam quam, eu aliquet risus faucibus sed.
                        Nam risus dolor, aliquet eu urna ut, laoreet laoreet
                        ligula. Integer gravida iaculis odio, ac placerat erat
                        vehicula eget. Mauris eget tincidunt ligula, sit amet
                        mattis diam. Cras consequat tristique ante. Donec ut dui
                        eu nulla rhoncus vulputate eu vitae nibh. Mauris ac
                        risus magna. Integer id auctor massa. Mauris ultricies
                        felis eu congue eleifend. Nulla et ultricies eros. Morbi
                        urna purus, commodo sit amet nisi quis, semper accumsan
                        quam. Nam eu massa eu lectus dapibus dignissim. Integer
                        dignissim sagittis facilisis. Proin et congue nunc.
                        Suspendisse ultrices, nisi efficitur pulvinar porttitor,
                        dolor diam cursus quam, at commodo mauris tortor
                        eleifend erat. Morbi luctus commodo ante non egestas.
                    </m.p>

                    <m.p
                        initial={{ y: '25%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
                        Suspendisse eget sollicitudin nunc. Phasellus in nisi id
                        neque feugiat tincidunt. Proin vel rhoncus lectus. Sed
                        ultrices blandit tempor. Aliquam efficitur viverra
                        semper. Phasellus blandit erat ut quam tristique
                        iaculis. Donec suscipit nec dolor ut cursus. In sed
                        metus sit amet metus laoreet ornare.Nullam tempus
                        viverra purus id mattis. Morbi aliquet egestas blandit.
                        Aenean vel ultricies lorem. Morbi sit amet consequat
                        lacus. Cras non diam faucibus, ultrices dui vel,
                        venenatis arcu. Ut quam augue, aliquam ac tempor sit
                        amet, vestibulum id enim. Etiam venenatis orci eget
                        risus luctus, vitae congue felis finibus.
                    </m.p>

                    <m.p
                        initial={{ y: '25%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.6,
                        }}
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
                        Cras sed mi eget lorem elementum consequat vitae vitae
                        libero. Sed eleifend felis justo, non ultrices sapien
                        commodo ut. Duis odio ex, tristique et laoreet id,
                        semper id magna. Donec ac arcu eu neque laoreet
                        porttitor non vel eros. Sed porttitor tempor neque quis
                        commodo. Sed ornare id neque vitae iaculis. Sed
                        tincidunt nisl vulputate enim volutpat, non laoreet
                        lacus rutrum. Vestibulum gravida mi faucibus est
                        volutpat, vel faucibus libero euismod. Quisque nec justo
                        non ante vulputate tincidunt eu et velit. Vivamus dictum
                        elit dui, eget dignissim justo placerat ac. Cras
                        consectetur dui nec tincidunt imperdiet. Proin
                        consectetur non urna vel ultrices. Vivamus rutrum dui
                        odio, ut hendrerit massa tincidunt a.
                    </m.p>
                    <Link
                        to="/"
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Tilbake hjem
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
