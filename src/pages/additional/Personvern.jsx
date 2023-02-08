import Layout from '../../components/shared/Layout';
import { Link } from 'react-router-dom';

export default function Personvern() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    <h1 className="xs:text-xsh1 sm:text-smh1 md:text-mdh1 lg:text-lgh1 xl:text-xlh1 text-h1 mb-2">Personvern</h1>
                    <h3 className="xs:text-xsh3 sm:text-smh3 md:text-mdh3 lg:text-lgh3 xl:text-xlh3 text-h3">
                        Når du bruker tjenester fra oss, gir du oss tilgang til
                        informasjon om deg. Vi innser at dette er et stort
                        ansvar, og vi jobber hardt for å beskytte informasjonen
                        din og gi deg kontroll over den.
                    </h3>
                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p">
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
                        <br></br>
                        <br></br>
                        Suspendisse eget sollicitudin nunc. Phasellus in nisi id
                        neque feugiat tincidunt. Proin vel rhoncus lectus. Sed
                        ultrices blandit tempor. Aliquam efficitur viverra
                        semper. Phasellus blandit erat ut quam tristique
                        iaculis. Donec suscipit nec dolor ut cursus. In sed
                        metus sit amet metus laoreet ornare.
                        <br></br>
                        <br></br>
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
                        <br></br>
                        <br></br>
                        Nullam tempus viverra purus id mattis. Morbi aliquet
                        egestas blandit. Aenean vel ultricies lorem. Morbi sit
                        amet consequat lacus. Cras non diam faucibus, ultrices
                        dui vel, venenatis arcu. Ut quam augue, aliquam ac
                        tempor sit amet, vestibulum id enim. Etiam venenatis
                        orci eget risus luctus, vitae congue felis finibus.
                    </p>
                    <Link
                        to="/"
                        className="transScale bg-solskinn px-4 py-4 mb-2 text-natt mt-2  w-48 rounded inline-flex justify-center items-center gap-2 xs:text-xsknapp sm:text-smknapp md:text-mdknapp lg:text-lgknapp xl:text-xlknapp text-knapp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 pr-2"
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
