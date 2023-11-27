import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./body.css";
import { useState } from "react";
import Judgment from "../Cases/judgmentCase/Judgment";
import Reschedule from "../Cases/rescheduleCase/Reschedule.jsx";
import Mediation from "../Cases/mediation/Mediation";
import Security from "./../Cases/securityCase/Security";
import HumanTrafficking from "./../Cases/HumanTraffickingCase/HumanTrafficking";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../Api/Store/proceduers.slice.js";

// eslint-disable-next-line react/prop-types
function Body({ isInputDisabled }) {
  const textAreaTitle = "تفاصيل الاجراء ";
  const [ProcedureNameAr, setProcedureNameAr] = useState("default");
  const dispatch = useDispatch();


  const {formData}= useSelector(state=>state.proceduers)
  console.log(formData);

const handelInputChange = ( e ) => {
  const {  name  , value , id } = e.target;
  setProcedureNameAr(value);
  dispatch(setFormData({ [name]: value , [id]:0 }));
console.log(formData);

 }




  const options = [
    "قرار الحكم",
    "وساطة",
    "التحقيق الامني",
    "احالة الي وحدة الاتجار بالبشر",
    "تأجيل الجلسة",
  ];
  return (
    <Form >
      {/* option select  */}
      <Row className="align-items-center text-end  mb-2">
        <Form.Label>الاجراء المتخذ</Form.Label>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              className="form-select"
              value={ProcedureNameAr}
              disabled={isInputDisabled}
              onChange={handelInputChange}
              name="ProcedureNameAr"
            >
              <option>اختر </option>
              {options.map((option) => (
                <option key={option} value={option} id={option}>
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
      {ProcedureNameAr === "قرار الحكم" && <Judgment />}
      {ProcedureNameAr === "تأجيل الجلسة" && <Reschedule />}
      {ProcedureNameAr === "وساطة" && <Mediation />}
      {ProcedureNameAr === "التحقيق الامني" && <Security />}
      {ProcedureNameAr === "احالة الي وحدة الاتجار بالبشر" && (
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
       
          />
          <Button variant="outline-primary px-4" className="save-btn" onClick={onsubmit}>
            حفظ الاجراء
          </Button>
        </Form.Group>
      </Col>
    </Form>
  );
}

export default Body;
