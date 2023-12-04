import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Datepickerr from "../../../Components/datepicker/Datepickerr";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainData } from "../../../Api/Store/proceduers.slice";

const Reschedule = (updateFormValues) => {
  const [values, setValues] = useState({
    value1: "",
    value2: "",
    dateValue: new Date(),
  });
  const dispatch = useDispatch();
  const handleInputChange = (name) => (e) => {
    const selectedValue = e.target.value;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: selectedValue,
    }));

    updateFormValues({ ...values, [name]: selectedValue });
  };
  const handleDateChange = (date) => {
    setValues((prevValues) => ({
      ...prevValues,
      dateValue: date,
    }));

    updateFormValues({ ...values, dateValue: date });
  };

  useEffect(() => {
    dispatch(getMainData());
  }, [dispatch]);
  const { mainData } = useSelector((state) => state.proceduers);
  const RescheduleReasonsList = mainData.RescheduleReasonsList;

  const optionsRescheduleReasonsList = RescheduleReasonsList.map((item) => {
    return (
      <option key={item.Id} value={item.NameAr}>
        {item.NameAr}
      </option>
    );
  });
  return (
    <>
      <Row className="align-items-center text-end  mb-2 ">
        <Col md={6}>
          <Form.Label>سبب تأجيل الجلسة</Form.Label>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              className="form-select"
              onChange={handleInputChange("value1")}
              value={values.value1}
            >
              <option>اختر </option>
              {optionsRescheduleReasonsList}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6} className=" mb-2">
          <Form.Label>تاريخ اتخاذ الاجراء</Form.Label>
          <Datepickerr
            className="w-100"
            selected={values.dateValue}
            onChange={handleDateChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default Reschedule;
