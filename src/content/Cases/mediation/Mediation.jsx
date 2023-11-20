import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Datepickerr from "../../../Components/datepicker/Datepickerr";

const Mediation = () => {
  return (
    <>
      <Row className="align-items-center text-end  mb-2 ">
        <Col md={4}>
          <Form.Label> هل ابدي الطرف الاخر الاستعداد لقبول الوساطة</Form.Label>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              className="form-select"
            >
              <option>اختر </option>
              <option value="1">سس</option>
              <option value="2">سسيسي</option>
              <option value="3">مسيور</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className=" mb-2">
          <Form.Label> هل نجحت الوساطة وتم التوصل لتسوية </Form.Label>
          <Datepickerr className="w-100" />
        </Col>
        <Col md={4} className=" mb-2">
          <Form.Label>تاريخ اتخاذ الاجراء</Form.Label>
          <Datepickerr className="w-100" />
        </Col>
      </Row>
    </>
  );
};

export default Mediation;
