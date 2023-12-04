import { Row, Col, FormSelect } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Datepickerr from "../../../Components/datepicker/Datepickerr";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainData } from "../../../Api/Store/proceduers.slice";

// eslint-disable-next-line react/prop-types
const Mediation = ({ updateFormValues }) => {
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
  const medtionAcceptedData = mainData.MediationIsAcceptedList;
  const medtionSettlementsList = mainData.MediationSettlementsList;

  const optionsAcceptance = medtionAcceptedData.map((item) => {
    return (
      <option key={item.Id} value={item.NameAr}>
        {item.NameAr}
      </option>
    );
  });

  const optionsMediationSettlementsList = medtionSettlementsList.map((item) => {
    return (
      <option key={item.Id} value={item.NameAr}>
        {item.NameAr}
      </option>
    );
  });
  return (
    <>
      <Row className="align-items-center text-end  mb-2 ">
        <Col md={4}>
          <Form.Label> هل ابدي الطرف الاخر الاستعداد لقبول الوساطة</Form.Label>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              className="form-select"
              onChange={handleInputChange("value1")}
              value={values.value1}
            >
              <option>اختر</option>
              {optionsAcceptance}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className=" mb-2">
          <Form.Label> هل نجحت الوساطة وتم التوصل لتسوية </Form.Label>
          <FormSelect
            aria-label="Default select example"
            className="form-select"
            onChange={handleInputChange("value2")}
            value={values.value2}
          >
            <option>اختر</option>
            {optionsMediationSettlementsList}
          </FormSelect>
        </Col>
        <Col md={4} className=" mb-2">
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

export default Mediation;
