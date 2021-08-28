import './../css/Navbar.css';
import './../css/MoodJournal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button id="closeBtn" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export {Modal};