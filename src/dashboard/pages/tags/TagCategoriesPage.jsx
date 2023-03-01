//React library
import { Link } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
//Icons
import {
    TagIcon,
    UserIcon,
    FaceSmileIcon,
    FlagIcon,
    StarIcon,
} from '@heroicons/react/24/outline';

export default function TagCategoriesPage() {
    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="inline-flex gap-3 mb-10 items-end">
                    <m.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    >
                        <TagIcon className="w-12" />
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                        className="text-xlh2 font-feteste leading-11"
                    >
                        Merkelapp kategorier
                    </m.h2>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <Link
                        to="/gdsadmin/tags/age"
                        state="age"
                        className="flex h-96 p-5 hover:text-bolge rounded-lg shadow-md border-b-8 border-bolge hover:border-b-[20px] bg-fred place-items-center text-center hover:shadow-xl transition-all duration-150 ease-in-out"
                    >
                        <div className="w-full">
                            <UserIcon className="w-12 mx-auto mb-5" />
                            <h5 className="text-xlh5 font-fet">
                                Aldersgrupper
                            </h5>
                            <p className="text-smp">
                                Legg til, slett eller endre de ulike
                                aldersgruppene.
                            </p>
                        </div>
                    </Link>

                    <Link
                        to="/gdsadmin/tags/gender"
                        state="gender"
                        className="flex h-96 p-5 hover:text-bolge rounded-lg shadow-md border-b-8 border-bolge hover:border-b-[20px] bg-fred place-items-center text-center hover:shadow-xl transition-all duration-150 ease-in-out"
                    >
                        <div className="w-full">
                            <FaceSmileIcon className="w-12 mx-auto mb-5" />
                            <h5 className="text-xlh5 font-fet">Kjønn</h5>
                            <p className="text-smp">
                                Legg til, slett eller endre de ulike kjønnene.
                            </p>
                        </div>
                    </Link>

                    <Link
                        to="/gdsadmin/tags/language"
                        state="language"
                        className="flex h-96 p-5 hover:text-bolge rounded-lg shadow-md border-b-8 border-bolge hover:border-b-[20px] bg-fred place-items-center text-center hover:shadow-xl transition-all duration-150 ease-in-out"
                    >
                        <div className="w-full">
                            <FlagIcon className="w-12 mx-auto mb-5" />
                            <h5 className="text-xlh5 font-fet">Morsmål</h5>
                            <p className="text-smp">
                                Legg til, slett eller endre de ulike morsmålene.
                            </p>
                        </div>
                    </Link>

                    <Link
                        to="/gdsadmin/tags/dialect"
                        state="dialect"
                        className="flex h-96 p-5 hover:text-bolge rounded-lg shadow-md border-b-8 border-bolge hover:border-b-[20px] bg-fred place-items-center text-center hover:shadow-xl transition-all duration-150 ease-in-out"
                    >
                        <div className="w-full">
                            <StarIcon className="w-12 mx-auto mb-5" />
                            <h5 className="text-xlh5 font-fet">Dialekt</h5>
                            <p className="text-smp">
                                Legg til, slett eller endre de ulike dialektene.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
