import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./body.css";
import { useEffect, useState } from "react";
import Judgment from "../Cases/judgmentCase/Judgment";
import Reschedule from "../Cases/rescheduleCase/Reschedule.jsx";
import Mediation from "../Cases/mediation/Mediation";
import Security from "./../Cases/securityCase/Security";
import HumanTrafficking from "./../Cases/HumanTraffickingCase/HumanTrafficking";

// eslint-disable-next-line react/prop-types
function Body({ isInputDisabled }) {
  const textAreaTitle = "تفاصيل الاجراء ";
  const [selectedOption, setSelectedOption] = useState("default");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [submittedFormData, setSubmittedFormData] = useState(null); // State to hold submitted form data
  const onsubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedOption: selectedOption,
      textAreaValue: textAreaValue,
    };
    setSubmittedFormData(formData); // Set the submitted form data
    // Any other action you might need on form submission
    console.log(submittedFormData);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handelTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const options = [
    "قرار الحكم",
    "وساطة",
    "التحقيق الامني",
    "احالة الي وحدة الاتجار بالبشر",
    "تأجيل الجلسة",
  ];
  return (
    <Form onSubmit={onsubmit}>
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
              disabled={isInputDisabled}
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
      {selectedOption === "احالة الي وحدة الاتجار بالبشر" && (
        <HumanTrafficking />
      )}

      {/* text area */}
      <Col md={12}>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="text-end mb-2"
        >
          <Form.Label>{textAreaTitle}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="mb-2"
            onChange={handelTextAreaChange}
          />
          <Button variant="outline-primary px-4" className="save-btn">
            حفظ الاجراء
          </Button>
        </Form.Group>
      </Col>
    </Form>
  );
}

export default Body;
