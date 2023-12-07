import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import Paginationn from "../pagination/Paginationn";
import Modall from "./../modal/Modall";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaseProcedures } from "../../Api/Store/proceduers.slice";
import Loading from "../loading/Loading";

const Tablee = () => {
  const [viewOnlyMode, setViewOnlyMode] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const dispatch = useDispatch();
  const { allCaseProcedures, currentPage, loading } = useSelector(
    (state) => state.proceduers
  );
  useEffect(() => {
    dispatch(getAllCaseProcedures({ page: currentPage, take: 7 }));
  }, [dispatch, currentPage]);

  const openModal = (procedure) => {
    setSelectedProcedure(procedure);
    setViewOnlyMode(false); // Reset to default mode
    setLgShow(true);
  };
  const openViewModal = (procedure) => {
    setSelectedProcedure(procedure);
    setViewOnlyMode(true);
    setLgShow(true);
  };

  const onhide = () => {
    setSelectedProcedure(null);
    setLgShow(false);
    setViewOnlyMode(false); // Reset to default mode
  };

  // Create an array to hold multiple rows
  const tableRows = allCaseProcedures.map((item, id) => (
    <tr key={item.Id}>
      <td>{item.ProcedureNameAr}</td>
      <td>{item.isBefore === "true" ? "نعم" : "لا"}</td>
      <td>{item.ProcedureDateString}</td>
      <td>{item.Note}</td>
      <td>
        <button
          type="button"
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${id}`}
          onClick={() => openModal(item)}
        >
          <FontAwesomeIcon icon={faEye} onClick={() => console.log(id)} />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-transparent"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal`}
          onClick={() => openViewModal(item)}
        >
          <FontAwesomeIcon icon={faPen} style={{ color: "#1f5120" }} />
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      {(loading && <Loading />) || ""}
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
      <Paginationn currentPage={currentPage} />
      <Modall
        lgShow={lgShow}
        onhide={onhide}
        viewOnlyMode={viewOnlyMode}
        selectedProcedure={selectedProcedure}
      />
    </>
  );
};

export default Tablee;
