import Modal from "react-bootstrap/Modal";
import Body from "../../content/mainBody/Body";

// eslint-disable-next-line react/prop-types
function Modall({ lgShow, onhide, caseProcedureById }) {
  const handleClose = (e) => {
    e.stopPropagation(); // Prevents events from reaching parent elements
    onhide(); // Close the modal
  };

  const handleBackdropClick = (e) => {
    e.stopPropagation(); // Prevents events from reaching parent elements
  };
  const dataToModal = caseProcedureById
    ? {
        ProcedureNameAr: caseProcedureById.ProcedureNameAr,
        note: caseProcedureById.Note,
        date: caseProcedureById.ProcedureDateString,
      }
    : null;
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={onhide}
        aria-labelledby="example-modal-sizes-title-lg"
        onClick={handleBackdropClick}
        dialogClassName="custom-modal"
        dir="rtl"
      >
        <Modal.Title
          id="example-modal-sizes-title-lg"
          className="bg-danger p-3"
        >
          تفاصيل الاجراء
        </Modal.Title>
        <Modal.Header
          closeButton
          onClick={(e) => handleClose(e)}
        ></Modal.Header>

        <Modal.Body>
          <Body dataToModal={dataToModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
