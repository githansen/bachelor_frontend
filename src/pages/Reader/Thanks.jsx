//React library
import { Link } from 'react-router-dom';
//Shared components
import Layout from '@/components/shared/Layout';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import ThanksIcon from '@/assets/img/ThreeDeeGraphic/thanks.png';

export default function Thanks() {
    return (
        <Layout>
            <div>
                <div className="min-h-[40rem] m-10 flex flex-col place-items-center justify-center gap-5">
                    <m.img //React library
                        src={ThanksIcon}
                        className="xs:h-[12rem] sm:h-[12rem] md:h-[13rem] lg:h-[15rem] h-[15rem] mb-10"
                    />

                    <m.h1
                        initial={{ y: '25%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="
                            uppercase
                            text-fet 
                            xs:text-xsh1 
                            sm:text-smh1 
                            xl:text-xlh1 
                            text-h1
                            text-skumring
                            mb-2"
                    >
                        Takk for ditt bidrag!
                    </m.h1>
                    <m.p
                        initial={{ y: '25%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="
                        font-normal 
                        xs:text-xsp 
                        sm:text-smp 
                        xl:text-xlp 
                        text-p
                        text-skumring
                        mb-5"
                    >
                        Din bidragskode er{' '}
                        <span className="border-2 border-solskinn bg-paskeegg text-skumring p-3 ml-1 rounded-lg">
                            <b>123E4567-E89B-12D30-EG94348</b>
                        </span>
                    </m.p>
                    <Link
                        to="/les"
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
                        gap-2"
                    >
                        Vil du bidra igjen?
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
