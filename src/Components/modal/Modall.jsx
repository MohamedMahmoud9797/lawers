import Modal from "react-bootstrap/Modal";

function Modall({ lgShow ,onhide}) {
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={onhide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
