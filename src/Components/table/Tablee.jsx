import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import Paginationn from "../pagination/Paginationn";
import Modall from "./../modal/Modall";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaseProcedures } from "../../Api/Store/proceduers.slice";

const Tablee = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCaseProcedures());
  }, [dispatch]);

  const { allCaseProcedures } = useSelector((state) => state.proceduers);

  // Create an array to hold multiple rows
  const tableRows = allCaseProcedures.map((item, index) => (
    <tr key={index}>
      <td>{item.ProcedureNameAr}</td>
      <td>{item.isBefore === "true" ? "نعم" : "لا"}</td>
      <td>{item.ProcedureDateString}</td>
      <td>{item.Note}</td>
      <td>
        <button
          type="button"
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${index}`}
          onClick={() => openModal()}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal`}
          onClick={() => onhide()}
        >
          <FontAwesomeIcon icon={faPen} style={{ color: "#1f5120" }} />
        </button>
      </td>
    </tr>
  ));

  const [lgShow, setLgShow] = useState(false);

  const openModal = () => {
    setLgShow(true);
  };

  const onhide = () => {
    setLgShow(false);
  };

  return (
    <>
      <table className="table text-end">
        <thead>
          <tr className="table-secondary">
            <th scope="col w-100 gap-2">الاجراء المتخذ</th>
            <th scope="col w-100">اجراء سابق</th>
            <th scope="col w-100">تاريخ اتخاذ الاجراء</th>
            <th scope="col w-100">تفاصيل الاجراء</th>
            <th scope="col w-100"></th>
            <th scope="col w-100"></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Paginationn />
      <Modall lgShow={lgShow} onhide={onhide} />
    </>
  );
};

export default Tablee;
