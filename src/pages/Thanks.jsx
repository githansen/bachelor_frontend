import Layout from '../components/shared/Layout';
import ThanksIcon from '../assets/img/thanks.png';
import { Link } from 'react-router-dom';

export default function Thanks() {
    return (
        <Layout>
            <div>
                <div className="min-h-[40rem] m-10 flex flex-col place-items-center justify-center">
                    <img src={ThanksIcon} className="w-[16rem] mb-5"></img>

                    <h2 className="text-h2 mb-5 uppercase">
                        Takk for ditt bidrag!
                    </h2>
                    <p className="text-p mb-10">
                        Din bidragskode er{' '}
                        <span className="border-2 border-secondary bg-secondary-soft p-3 ml-1 rounded-lg">
                            <b>123E4567-E89B-12D30-EG94348</b>
                        </span>
                    </p>
                    <Link
                        to="/les"
                        className="transScale bg-secondary px-8 py-4 font-bold mb-2 text-h4 text-black mt-2  w-fit rounded inline-flex justify-center items-center gap-2"
                    >
                        Vil du bidra igjen?
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
