import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./witness.css";
const Withness = () => {
  return (
    <>
      <div className="mb-3 position-relative">
        <button
          type="button"
          className="btn btn-danger position-absolute start-0"
        >
          <FontAwesomeIcon icon={faTrash} />{" "}
        </button>
        <h6 className="text-end"> الشاهد 1</h6>
      </div>

      <div className="d-flex justify-content-between flex-column mb-3">
        <label className="form-label text-end mb-3 ">الاسم</label>
        <input type="text" className="form-control text-end" />
      </div>

      <div className=" d-flex justify-content-between mb-3">
        <label className="form-label  ">رقم الهاتف </label>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="JO"
          className="form-control "
        />
        <label className="form-label ">العنوان</label>
        <input type="text" className="form-control" />
      </div>

      <div className="d-flex justify-content-end me-5 ">
        <button type="button" className="btn save-btn">
          <FontAwesomeIcon icon={faPlus} className="ms-2 " />
          اضافة شاهد اخر
        </button>
      </div>
      <button type="button" className="btn save-btn w-25 ">
        حفظ{" "}
      </button>
    </>
  );
};

export default Withness;
