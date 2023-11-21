import Modal from "react-bootstrap/Modal";
import Body from "../../content/mainBody/Body";

// eslint-disable-next-line react/prop-types
function Modall({ lgShow, onhide }) {
  const handleClose = (e) => {
    e.stopPropagation(); // Prevents events from reaching parent elements
    onhide(); // Close the modal
  };

  const handleBackdropClick = (e) => {
    e.stopPropagation(); // Prevents events from reaching parent elements
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={onhide}
        aria-labelledby="example-modal-sizes-title-lg"
        onClick={handleBackdropClick}
      >
        <Modal.Title id="example-modal-sizes-title-lg" dir="rtl">
          تعديل الاجراء
        </Modal.Title>
        <Modal.Header
          closeButton
          onClick={(e) => handleClose(e)}
          className="justify-content-between bg-danger"
        ></Modal.Header>
        <Modal.Body>
          <Body className="h-100 bg-black" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
