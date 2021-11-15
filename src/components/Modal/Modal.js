import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import From_To from '../From_To/From_To';
import Table from '../Table/Table';
import UserInf from '../UserInf/UserInf';

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <>
        <div className="animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
          <div className="overflow-auto border-t-8 max-h-full	 max-w-full	bg-opacity-50 border-gray-800 bg-gray-800  rounded-xl p-5 absolute mx-auto my-auto rounded-xl shadow-lg  bg-white">  
            <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>
            <div  className="float-right h-1.5">
              <div onClick={closeModal} ref={modalRef} className="p-4">X</div>
            </div>
              <div className="flex items-center px-2 py-3" showModal={showModal}>
              <div>
                <UserInf />
              </div>
              <div className="mx-3">
                  <Table />
                  <From_To />
              </div>
              </div>
          </div>
        </div>
        </>
      ) : null}
    </>
  );
};
