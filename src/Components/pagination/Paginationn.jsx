import { useDispatch } from "react-redux";

import { getAllCaseProcedures } from "../../Api/Store/proceduers.slice";
import "./pagination.css";
// eslint-disable-next-line react/prop-types
const Paginationn = ({ currentPage }) => {
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    // Dispatch the action with the new page
    dispatch(getAllCaseProcedures({ page: newPage, take: 5 }));
  };

  return (
    <nav aria-label="Page navigation example" dir="rtl">
      <ul className="pagination  px-3  gap-2 justify-content-end">
        <li className="page-item ">
          <a
            className="page-link text-dark"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            التالي
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link text-dark"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            السابق{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginationn;
