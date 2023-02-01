import GiDinStemmeIconNoBg from "../../assets/img/GiDinStemmeIconNoBg.png";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <header>
        <nav className="px-4 lg:px-6 py-5">
          <div className="flex justify-start mx-14">
            <button
              type="button"
              className="flex items-center"
              onClick={openModal}
            >
              <img
                src={GiDinStemmeIconNoBg}
                className="h-[3rem] hover:opacity-80 transition duration-150 ease-in-out"
                alt="GiDinStemme - Logo"
              />
            </button>
          </div>
        </nav>
      </header>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-14 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md text-center transform overflow-hidden rounded-lg bg-white p-14 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-h4 font-medium leading-6"
                  >
                    Sikker på at du vil avslutte?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-p text-gray-500">
                      Merk at all din data vil bli borte.
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="transScale bg-secondary px-4 py-4 font-bold text-p text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                      onClick={() => navigate("/")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      Ta meg tilbake
                    </button>

                    <button
                      onClick={closeModal}
                      className="bg-light px-5 py-2 mt-2 text-black w-40 rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
                    >
                      Avbryt
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
