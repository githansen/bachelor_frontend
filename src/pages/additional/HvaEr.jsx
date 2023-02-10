import Layout from '../../components/shared/Layout';
import PolitietLogo from '../../assets/img/politiet-logo.jpeg';
import NorgeFellesskapImg from '../../assets/img/NorgeFellesskapImg.jpeg';
import RobotFremtidImg from '../../assets/img/RobotFremtidImg.jpeg';

export default function HvaEr() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    
                    <div className='grid grid-cols-2 xs:grid-cols-1 xs:gap-5 sm:gap-8 md:gap-10 xs:mb-5 sm:mb-10 md:mb-12'>
                        <img 
                            src={NorgeFellesskapImg} 
                            alt="Fellesskap - Norge" 
                            className="object-cover object-center w-full xs:h-[15rem] sm:h-[15rem] md:h-[25rem] rounded-lg"
                        />
                        <img 
                            src={RobotFremtidImg} 
                            alt="Robot håndhilser på menneske" 
                            className="object-cover object-center w-full xs:h-[15rem] sm:h-[15rem] md:h-[25rem] rounded-lg"
                        />
                    </div>
                    
                    <div className='mb-6 gap-5'>
                        <h1
                            className="
                            font-fet 
                            xs:text-xsh1 
                            sm:text-smh1 
                            xl:text-xlh1 
                            text-h1
                            text-skumring
                            mb-5"
                        >
                            En webapp med hensikt...
                        </h1>

                        <h4
                            className="
                            font-normal 
                            xs:text-xsh4 
                            sm:text-smh4 
                            xl:text-xlh4 
                            text-h4
                            text-metall"
                        >
                            Sed finibus quam quam, eu aliquet risus faucibus sed.
                            Nam risus dolor, aliquet eu urna ut, laoreet laoreet
                            ligula. Integer gravida iaculis odio, ac placerat erat
                            vehicula eget. Mauris eget tincidunt ligula.
                        </h4>
                    </div>


                    <p
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
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
                        Etiam sit amet lobortis lectus, ut laoreet magna. In ut
                        nisl sit amet sapien dictum imperdiet. Duis eu libero
                        mauris. Vivamus gravida dictum mauris lobortis commodo.
                        Nulla sed commodo neque, sed hendrerit quam. Fusce velit
                        ante, ultricies a sagittis in, porttitor nec magna.
                        Mauris dolor nisi, cursus non ex a, varius aliquam
                        justo. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Etiam non risus venenatis nunc ullamcorper
                        tincidunt.
                    </p>
                    <p
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
                        Sed feugiat luctus erat sed varius. Aenean pulvinar nibh
                        eu condimentum pellentesque. Suspendisse luctus
                        tincidunt felis non lacinia. Ut condimentum, lacus quis
                        lacinia maximus, odio leo tempor tortor, sed interdum
                        lectus erat eu tellus. Ut nunc diam, faucibus sit amet
                        accumsan a, condimentum nec libero. In volutpat maximus
                        ligula vitae porta. Donec placerat magna eget ligula
                        congue ultrices. Aenean nec iaculis turpis. Praesent
                        aliquet risus id mi convallis tincidunt. Aenean eget ex
                        feugiat, tincidunt sem sed, convallis nunc. Maecenas
                        felis ligula, rhoncus vitae nisi tempor, molestie
                        lacinia mi. Ut vel pharetra odio. Maecenas vitae diam
                        non eros vestibulum scelerisque sit amet nec nibh.
                        Vivamus luctus libero metus. Aliquam sit amet ornare
                        metus.
                    </p>

                    <div className='grid grid-col-1 place-self-end place-items-center'>
                        <h6 
                            className="
                            font-feteste 
                            xs:text-xsh6 
                            sm:text-smh6 
                            xl:text-xlh6 
                            text-h6
                            text-skumring"
                        >
                            Utviklet i samarbeid med
                        </h6>

                        <a target="_blank" href="https://www.politiet.no/om-politiet/organisasjonen/sarorganene/pit/">
                            <img
                                src={PolitietLogo}
                                alt="Politiet - Logo"
                                className="object-contain mt-2 hover:opacity-40 transition duration-150 ease-in-out xs:w-[12rem] sm:w-[12rem] md:w-[12rem] lg:w-[14rem] w-[16rem]"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </Layout>
    );
}
