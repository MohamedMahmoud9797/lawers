import Accordion from "react-bootstrap/Accordion";
import Body from "../../content/mainBody/Body";
import "../accordion/accordion.css";
import { useSelector } from "react-redux";
import Loading from "../../Components/loading/Loading.jsx";

function AccordionCopmonent() {
  const headerTitle =
    " 10-الاجراءات المتخدة من قبل المحامين العاملين لدي المركز ";
    const {loading}= useSelector((state)=>state.proceduers)
  return (
    <>
    {loading && <Loading/> ||""}

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{headerTitle} </Accordion.Header>
        <div className="line"></div>
        <Accordion.Body dir="rtl" className="custom-accordion ">
          <Body />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default AccordionCopmonent;
