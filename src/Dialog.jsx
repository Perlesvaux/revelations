// Modal as a separate component
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
  }, [openModal]);

  return (
    <dialog 
      style={{
        background: "linear-gradient(90deg, rgba(131,58,180,0.8) 0%, rgba(253,29,29,0.8) 50%, rgba(252,176,69,0.8) 100%)",
        border: "0px solid transparent",
        borderRadius: "20px",
        width: "500px", 
      }}
      ref={ref}
      onCancel={closeModal}
    >
      <div 
        style={{
        display:"flex",
        flexDirection:"column",
        rowGap:"20px"}}
      >
        {children}

        <button 
          className="btn btn-dark" 
          onClick={closeModal}
        >
          <X fill="lightcoral" size="24px"/>
        </button>

      </div>

    </dialog>
  );
}
