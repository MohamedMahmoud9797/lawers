import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Datepickerr from "../../../Components/datepicker/Datepickerr";
import { useEffect, useState } from "react";
import { getMainData } from "../../../Api/Store/proceduers.slice";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line react/prop-types
const Judgment = ({ updateFormValues }) => {
  const [values, setValues] = useState({
    value1: "",
    value2: "",
    dateValue1: new Date(),
    dateValue2: new Date(),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainData());
  }, [dispatch]);
  const { mainData } = useSelector((state) => state.proceduers);
  const JudgementsList = mainData.JudgementsList;
  const JudgementsListOptions = JudgementsList.map((item) => {
    return (
      <option key={item.Id} value={item.NameAr}>
        {item.NameAr}
      </option>
    );
  });

  const handleInputChange = (name) => (e) => {
    const selectedValue = e.target.value;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: selectedValue,
    }));

    updateFormValues({ ...values, [name]: selectedValue });
  };
  const handleDateChange = (name) => (date) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: date,
    }));

    updateFormValues({ ...values, dateValue: date });
  };

  return (
    <>
      <Row className="align-items-center text-end  mb-2 ">
        <Col md={12}>
          <Form.Label> قرار الحكم </Form.Label>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              className="form-select"
              onChange={handleInputChange("value1")}
              value={values.value1}
            >
              <option>اختر </option>
              {JudgementsListOptions}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6} className=" mb-2">
          <Form.Label>تاريخ قرار الحكم </Form.Label>
          <Datepickerr
            className="w-100"
            selected={values.dateValue1}
            onChange={handleDateChange("dateValue1")}
          />
        </Col>
        <Col md={6} className=" mb-2">
          <Form.Label>تاريخ اتخاذ الاجراء</Form.Label>
          <Datepickerr
            className="w-100"
            selected={values.dateValue2}
            onChange={handleDateChange("dateValue2")}
          />
        </Col>
      </Row>
    </>
  );
};

export default Judgment;
