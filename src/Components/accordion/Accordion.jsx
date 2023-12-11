import Accordion from "react-bootstrap/Accordion";
import Body from "../../content/mainBody/Body";
import Withness from "../../content/witnexx/Withness.jsx";
import "../accordion/accordion.css";
import { useSelector } from "react-redux";
import Loading from "../../Components/loading/Loading.jsx";
import DropDownn from "./../dropDown/DropDown";

// eslint-disable-next-line react/prop-types
function AccordionContent({ children, eventKey, headerTitle }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{headerTitle}</Accordion.Header>
      <div className="line"></div>
      <Accordion.Body dir="rtl" className="custom-accordion">
        {children}
      </Accordion.Body>
    </Accordion.Item>
  );
}

function AccordionComponent() {
  const { loading } = useSelector((state) => state.proceduers);

  return (
    <>
      {loading && <Loading />}
      <Accordion defaultActiveKey="0">
        <AccordionContent
          eventKey="0"
          headerTitle="  10-الاجراءات المتخدة من قبل المحامين العاملين لدي المركز"
        >
          <Body />
        </AccordionContent>
      </Accordion>
      <DropDownn />

      <div style={{ margin: "200px" }}></div>

      <Accordion defaultActiveKey="1">
        <AccordionContent
          eventKey="1"
          headerTitle="11-بيانات خاصة بالشهود الآخرين إن وجدوا "
        >
          <Withness />
        </AccordionContent>
      </Accordion>
      <div style={{ margin: "200px" }}></div>
    </>
  );
}

export default AccordionComponent;
