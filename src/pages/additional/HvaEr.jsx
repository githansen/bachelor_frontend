import Layout from '../../components/shared/Layout';
import PolitietLogo from '../../assets/img/politiet-logo.jpeg';

export default function HvaEr() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    <h1 className="xs:text-xsh1 sm:text-smh1 md:text-mdh1 lg:text-lgh1 xl:text-xlh1 text-h1 mb-2">En webapp med hensikt...</h1>
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
                    </p>
                    <h4 className="xs:text-xsh4 sm:text-smh4 md:text-mdh4 lg:text-lgh4 xl:text-xlh4 text-h4">Utviklet i norge, for norge.</h4>
                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p mb-5">
                        Nullam eget nunc mauris. Quisque non risus eu mauris
                        auctor interdum. Cras id sollicitudin ipsum. Sed sed
                        nunc congue, posuere sem a, dapibus ipsum. Aliquam erat
                        volutpat. Maecenas feugiat eros id elit dapibus blandit.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Etiam et lorem
                        quam. Ut rutrum, ante cursus luctus convallis, velit
                        odio pharetra arcu, id pellentesque risus orci in magna.
                        Phasellus at condimentum arcu. Curabitur eros risus,
                        vulputate sit amet pulvinar at, fringilla molestie est.
                        Praesent sed fermentum lacus. Suspendisse eget urna
                        arcu. Vestibulum ut ornare arcu, tempus sagittis nunc.
                    </p>
                    <h5 className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 lg:text-lgh5 xl:text-xlh5 text-h5">
                        I samarbeid med Politiets IT-Enhet
                    </h5>
                    <a target="_blank" href="https://www.politiet.no">
                        <img
                            src={PolitietLogo}
                            alt="Politiet - Logo"
                            className="object-contain xs:w-[12rem] sm:w-[12rem] md:w-[12rem] lg:w-[14rem] w-[16rem]"
                        />
                    </a>
                </div>
            </div>
        </Layout>
    );
}
