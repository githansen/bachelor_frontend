import Layout from '../components/shared/Layout';
import ThanksIcon from '../assets/img/thanks.png';
import { Link } from 'react-router-dom';

export default function Thanks() {
    return (
        <Layout>
            <div>
                <div className="min-h-[40rem] m-10 flex flex-col place-items-center justify-center">
                    <img 
                        src={ThanksIcon} 
                        className="w-[16rem] mb-5">
                    </img>
                    <h2 className="xs:text-xsh2 sm:text-smh2 md:text-mdh2 lg:text-lgh2 xl:text-xlh2 text-h2 mb-5 uppercase">
                        Takk for ditt bidrag!
                    </h2>
                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p mb-10">
                        Din bidragskode er{' '}
                        <span className="border-2 border-solskinn bg-paskeegg p-3 ml-1 rounded-lg">
                            <b>123E4567-E89B-12D30-EG94348</b>
                        </span>
                    </p>
                    <Link
                        to="/les"
                        className="xs:w-full w-48 transScale bg-solskinn px-4 py-4 mb-2 text-natt mt-2 rounded inline-flex justify-center items-center gap-2 xs:text-xsknapp sm:text-smknapp md:text-mdknapp lg:text-lgknapp xl:text-xlknapp text-knapp"
                    >
                        Vil du bidra igjen?
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
