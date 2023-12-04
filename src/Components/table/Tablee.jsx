import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import Paginationn from "../pagination/Paginationn";
import Modall from "./../modal/Modall";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCaseProcedures } from "../../Api/Store/proceduers.slice";

const Tablee = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCaseProcedures());
  }, [dispatch]);

  


  const [lgShow, setLgShow] = useState(false);
  const openModal = () => {
    setLgShow(true);
  };
  const onhide = () => {
    setLgShow(false);
  };

  return (
    <>
      <table className="table    text-end">
        <thead>
          <tr className="table-secondary">
            <th scope="col">الاجراء المتخذ </th>
            <th scope="col">اجراء سابق</th>
            <th scope="col">تاريخ اتخاذ الاجراء </th>
            <th scope="col w-50">تفاصيل الاجراء</th>
            <th scope="col w-50"> </th>
            <th scope="col w-50"> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                type="button"
                className="btn btn-transparent"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                onClick={() => openModal()}
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button
                type="button"
                className="btn btn-transparent"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => onhide()}
              >
                <FontAwesomeIcon icon={faPen} style={{ color: "#1f5120" }} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginationn />
      <Modall lgShow={lgShow} onhide={onhide} />
    </>
  );
};

export default Tablee;
