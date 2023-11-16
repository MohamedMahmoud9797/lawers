import { Accordion, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./body.css";
import Datepickerr from "../Components/datepicker/Datepickerr";
const Body = () => {
  return (
    <Accordion.Body dir="rtl">
      <Form>
        <Row className="align-items-center text-end ">
          <Form.Label>الاجراء المتخذ</Form.Label>
          <Col md={7}>
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
          <Col md={2}>
            <Form.Group
              controlId="formGridCheckbox"
              className="d-flex align-items-center justify-content-center gap-2  "
            >
              <Form.Check type="checkbox" />
              <Form.Label className="checkBox-Label">اجراء سابق</Form.Label>
            </Form.Group>
          </Col>
          <Col md={7} className="mt-3">
            <Form.Label>تاريخ اتخاذ الاجراء</Form.Label>

            <Datepickerr className="w-100" />
          </Col>
        </Row>
      </Form>
    </Accordion.Body>
  );
};

export default Body;
