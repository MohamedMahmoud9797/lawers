import Accordion from "react-bootstrap/Accordion";
import Body from "../../content/mainBody/Body";
import "../accordion/accordion.css";
function AccordionCopmonent() {
  const headerTitle =
    " 10-الاجراءات المتخدة من قبل المحامين العاملين لدي المركز ";
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{headerTitle} </Accordion.Header>
        <div className="line"></div>
        <Accordion.Body dir="rtl" className="custom-accordion ">
          <Body />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCopmonent;
