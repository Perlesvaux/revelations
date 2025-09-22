// Modal as a separate component
import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";
import X from "./X.jsx"


export default function Dialog({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }

    const clickedOutside = (e) => {
      if (e.target === ref.current) { ref.current?.close(); closeModal() }
      //console.log(e.target)
      //console.log(ref.current)
    }

    addEventListener('click', clickedOutside)

    return ()=> removeEventListener('click', clickedOutside)

  }, [openModal]);

  return (
    <dialog
      className="m-auto backdrop:bg-black/70 backdrop:backdrop-blur-sm rounded-lg"
      ref={ref}
      onCancel={closeModal}
    >
      <div className="bg-gradient-to-r from-purple-600/80 via-red-600/80 to-orange-500/80  rounded-lg w-[80vh] max-w-[90vw] max-h-[85vh]  overflow-hidden">
          {children}

      </div>

    </dialog>
  );
}

Dialog.propTypes = {
  openModal:PropTypes.bool.isRequired, 
  closeModal:PropTypes.func.isRequired, 
  children:PropTypes.node
};

        //<button 
        //  className="w-full flex flex-col justify-center items-center hover:bg-gray-100/10 absolute"
        //  onClick={closeModal}
        //>
        //  <X fill="lightcoral" size="24px"/>
        //</button>


