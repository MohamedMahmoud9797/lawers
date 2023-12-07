import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="success" />
      </div>
    </>
  );
};

export default Loading;
