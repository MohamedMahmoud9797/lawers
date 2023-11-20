import { Accordion, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./body.css";
import { useState } from "react";
import Judgment from "../Cases/judgmentCase/Judgment";
import Reschedule from "../Cases/rescheduleCase/Reschedule.jsx";
import Mediation from "../Cases/mediation/Mediation";
import Security from "./../Cases/securityCase/Security";
import Shelter from "./../Cases/shelterCase/Shelter";
function Body() {
  const textAreaTitle = "تفاصيل الاجراء ";
  const [selectedOption, setSelectedOption] = useState("default");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = [
    "تأجيل الجلسة",
    "قرار الحكم",
    "وساطة",
    "التحقيق الامني",
    "احالة الي وحدة الاتجار بالبشر",
    "تأجيل الجلسة",
  ];
  return (
    <Accordion.Body dir="rtl" className="custom-accordion ">
      <Form>
        {/* option select  */}
        <Row className="align-items-center text-end  mb-2">
          <Form.Label>الاجراء المتخذ</Form.Label>
          <Col md={6}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Select
                aria-label="Default select example"
                className="form-select"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option>اختر </option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group
              controlId="formGridCheckbox"
              className="d-flex align-items-center justify-content-center gap-2  "
            >
              <Form.Check type="checkbox" />
              <Form.Label className="checkBox-Label">اجراء سابق</Form.Label>
            </Form.Group>
          </Col>
        </Row>
        {/* cases ui  */}
        {selectedOption === "قرار الحكم" && <Judgment />}
        {selectedOption === "تأجيل الجلسة" && <Reschedule />}
        {selectedOption === "وساطة" && <Mediation />}
        {selectedOption === "التحقيق الامني" && <Security />}
        {selectedOption === "احالة الي وحدة الاتجار بالبشر" && <Shelter />}

        {/* text area */}
        <Col md={12}>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className="text-end mb-2"
          >
            <Form.Label>{textAreaTitle}</Form.Label>
            <Form.Control as="textarea" rows={5} className="mb-2" />
            <Button variant="outline-primary px-4" className="save-btn">
              حفظ الاجراء
            </Button>
          </Form.Group>
        </Col>
      </Form>
    </Accordion.Body>
  );
}

export default Body;
