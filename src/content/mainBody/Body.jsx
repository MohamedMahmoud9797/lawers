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
function Body({ dataToModal, isFirstInputDisabled }) {
  const textAreaTitle = "تفاصيل الاجراء";
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [formData, setFormData] = useState({});
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [date, setDate] = useState("");

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
  const handleTextareaChange = (e) => {
    const textareaValue = e.target.value;
    updateFormValues({ textarea: textareaValue });
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
  const componentMap = {
    "صدر قرار حكم": Judgment,
    وساطة: Mediation,
    "التدقيق الامني": Security,
    "احالة الى وحدة مكافحة الاتجار بالبشر": HumanTrafficking,
    "تأجيل الجلسة": Reschedule,
    "احالة الى مأوى": HumanTrafficking,
  };

  useEffect(() => {
    if (dataToModal) {
      setIsInputDisabled(true);
      // Example: Update form data based on dataToModal
      // eslint-disable-next-line react/prop-types
      const { ProcedureNameAr, note, date } = dataToModal;
      // eslint-disable-next-line react/prop-types
      const trimedProcedureNameAr = ProcedureNameAr.trim();
      // Update the select value
      setSelectValue(trimedProcedureNameAr);
      setTextareaValue(note);
      setDate(date);
    }
  }, [dataToModal]);

  const SelectedComponent = componentMap[selectValue] || null;
  const renderedComponent = SelectedComponent && (
    <SelectedComponent
      updateFormValues={updateFormValues}
      isInputDisabled={isInputDisabled}
      date={date}
    />
  );

  return (
    <>
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
                disabled={isFirstInputDisabled}
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
            <Form.Control
              as="textarea"
              rows={5}
              className="mb-2"
              onChange={handleTextareaChange}
              value={textareaValue}
              disabled={isInputDisabled}
            />
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
    </>
  );
}

export default Body;
