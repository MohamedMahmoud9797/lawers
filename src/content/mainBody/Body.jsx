import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./body.css";
import { useEffect, useState } from "react";
import Judgment from "../Cases/judgmentCase/Judgment";
import Reschedule from "../Cases/rescheduleCase/Reschedule.jsx";
import Mediation from "../Cases/mediation/Mediation";
import Security from "./../Cases/securityCase/Security";
import HumanTrafficking from "./../Cases/HumanTraffickingCase/HumanTrafficking";
import { useDispatch, useSelector } from "react-redux";
import {
  createCaseProcedure,
  getMainData,
  getProcedures,
} from "../../Api/Store/proceduers.slice.js";

// eslint-disable-next-line react/prop-types
function Body({ isInputDisabled }) {
  const textAreaTitle = "تفاصيل الاجراء";
  const [selectValue, setSelectValue] = useState("");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProcedures());
    dispatch(getMainData());
  }, [dispatch]);

  const { values } = useSelector((state) => state.proceduers);
  const options = values;

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send formData to the API
    console.log("Data to be sent:", formData);
    // eslint-disable-next-line no-undef
    updateFormValues(formData);
    dispatch(createCaseProcedure(formData));
  };
  const updateFormValues = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  let renderedComponent;

  if (selectValue === "صدر قرار حكم") {
    renderedComponent = <Judgment updateFormValues={updateFormValues} />;
  } else if (selectValue === "وساطة") {
    renderedComponent = <Mediation updateFormValues={updateFormValues} />;
  } else if (selectValue === "التدقيق الامني") {
    renderedComponent = <Security updateFormValues={updateFormValues} />;
  } else if (selectValue === "احالة الى وحدة مكافحة الاتجار بالبشر") {
    renderedComponent = (
      <HumanTrafficking updateFormValues={updateFormValues} />
    );
  } else if (selectValue === "تأجيل الجلسة") {
    renderedComponent = <Reschedule updateFormValues={updateFormValues} />
  }
  
  else if (selectValue === "احالة الى مأوى" ) {
    renderedComponent = <HumanTrafficking updateFormValues={updateFormValues} />
  }
  
  else {
    renderedComponent = null;
  }

  return (
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
              disabled={isInputDisabled}
              value={selectValue}
            >
              <option>اختر </option>
              {options &&
                options.map((option) => (
                  <option key={option.Id}>{option.NameAr}</option>
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
      {renderedComponent}
      {/* text area */}
      <Col md={12}>
        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="text-end mb-2"
        >
          <Form.Label>{textAreaTitle}</Form.Label>
          <Form.Control as="textarea" rows={5} className="mb-2" />
          <Button
            variant="outline-primary px-4"
            className="save-btn"
            onClick={handleSubmit}
          >
            حفظ الاجراء
          </Button>
        </Form.Group>
      </Col>
    </Form>
  );
}

export default Body;
