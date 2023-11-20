import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {  faPen } from "@fortawesome/free-solid-svg-icons";
import "./table.css"
import Paginationn from "../pagination/Paginationn";
const Tablee = () => {
  return (
 <>
  <table className="table    text-end">
      <thead >
        <tr className="table-secondary" >
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
          <td>ss</td>
          <td></td>
          <td></td>
          <td> </td>
          <td>
            <button
              type="button"
              className="btn btn-transparent"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              <FontAwesomeIcon icon={faEye } onc />{" "}
            </button>{" "}
            <button
              type="button"
              className="btn btn-transparent"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
          <FontAwesomeIcon icon={faPen} style={{color: "#1f5120",}} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Paginationn />
 </>

  );
};

export default Tablee;
