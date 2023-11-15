import Accordion from "react-bootstrap/Accordion";
import Body from "./Body";

function AccordionCopmonent() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>الاجراءات المتخدة من ثبل المحامين </Accordion.Header>
        <Body />
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCopmonent;
