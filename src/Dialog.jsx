// Modal as a separate component
import { useEffect, useRef } from "react";
import X from "./X.jsx"
import styles from "./Dialog.module.css"

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
    <dialog className={styles.glassdialog}
      ref={ref}
      onCancel={closeModal}
    >
      <div>

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
