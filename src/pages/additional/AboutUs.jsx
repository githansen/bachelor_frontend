//React library
import Layout from '@/components/shared/Layout';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import PolitietLogo from '@/assets/img/Other/politiet-logo.webp';
import NorgeFellesskapImg from '@/assets/img/Banner/NorgeFellesskapImg.webp';
import RobotFremtidImg from '@/assets/img/Banner/RobotFremtidImg.webp';

export default function AboutUs() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col gap-5">
                    <div className="grid grid-cols-2 xs:grid-cols-1 xs:gap-5 sm:gap-8 md:gap-10 xs:mb-5 sm:mb-10 md:mb-12">
                        <m.img
                            initial={{ y: '-15%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'anticipate' }}
                            src={NorgeFellesskapImg}
                            alt="Fellesskap - Norge"
                            className="object-cover object-center w-full xs:h-[15rem] sm:h-[15rem] md:h-[25rem] rounded-lg"
                        />
                        <m.img
                            initial={{ y: '15%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'anticipate' }}
                            src={RobotFremtidImg}
                            alt="Robot håndhilser på menneske"
                            className="object-cover object-center w-full xs:h-[15rem] sm:h-[15rem] md:h-[25rem] rounded-lg"
                        />
                    </div>

                    <div className="mb-6 gap-5">
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
                            En webapp med hensikt...
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
                            Vi ønsker morgendagen velkommen, og ser frem til en
                            spennende fremtid i vente. For å fortsette å være et
                            land med ledende teknologisk utvikling, er det
                            viktig å tilpasse seg trender og marked. GiDinStemme
                            dekker et grunnlag ved fortsettelsen av nyskapning
                            og modernisering av samfunnet. Bli med på reisen!
                        </m.h4>
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
                        De fleste frykter dem, mange ser frem til dem, og noen
                        har ingen spesifikk mening om dem. Vi kaller det kunstig
                        intelligens. Du har kanskje prøvd ut ChatGPT, eller
                        kanskje brukt Siri på din iphone? Dette er det vi kaller
                        kunstig intelligens. Altså datamaskiner som er trenes
                        opp ved å lære seg algoritmer, mønstre og gjentakelser
                        for å gjøre min og din hverdag litt lettere. I samarbeid
                        med Politiets IT-enhet har en studentgruppe fra Oslomet
                        begitt seg ut på oppgaven om å samle inn data for å
                        nettopp trene opp en slik kunstig intelligens. Nå kan
                        det kanskje høres skummelt ut at det er i regi av
                        politiet hvor dette prosjektet utvikles. Men se på det
                        fra den lyse siden, politiet holder norge tross alt
                        trygt. Så for å bistå politiet i deres arbeid mot
                        kriminalitet, har vi laget en webapp som har til hensikt
                        å samle inn stemmen fra den helt vanlige nordmannen på
                        gata. Dette er et anonymisert bidrag som skal brukes til
                        å trene opp en kunstig intelligens som skal kunne hjelpe
                        politiet med å blant annet løse kriminalitet. Vi håper
                        du vil være med på å bidra til å gjøre samfunnet
                        tryggere, og at du vil ta deg tid til å bidra med din
                        stemme. Vi estimerer at det ikke vil ta mer enn 5
                        minutter av din tid.
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
                        Denne webapplikasjone er utviklet i samarbeid mellom
                        Politiets IT-enhet og StudentGruppe40. Vi er en gruppe
                        på 4 studenter som studerer informasjonsteknologi, ved
                        Oslomet Pilestredet i Oslo. Gruppen består av Junus Sefa
                        (Frontend utvikler og grafisk designer), Tony (Frontend
                        utvikler), Henrik Larsen (Backend utvikler) og Johan
                        (Backend utvikler). Vi har tatt i bruk den mest moderne
                        teknologien på markedet, og er stolte av å presentere
                        vårt prosjekt for det norske samfunn. Om du er
                        interessert i å lese mer om vårt bachelorprosjekt, kan
                        du finne mer informasjon ved å klikke her.
                    </m.p>

                    <div className="grid grid-col-1 place-self-end place-items-center">
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

                        <a
                            target="_blank"
                            href="https://www.politiet.no/om-politiet/organisasjonen/sarorganene/pit/"
                        >
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
