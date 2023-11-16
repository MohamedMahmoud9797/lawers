import Accordion from "react-bootstrap/Accordion";
import Body from "../../content/Body";
import "../accordion/accordion.css";
function AccordionCopmonent() {
  const headerTitle =
    " 10-الاجراءات المتخدة من قبل المحامين العاملين لدي المركز ";
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{headerTitle} </Accordion.Header>
        <Body />
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCopmonent;
