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
        <button type="button" className="btn btn-danger position-absolute">
          <FontAwesomeIcon icon={faTrash} />{" "}
        </button>
        <br></br>
        <br></br>
        <br></br>
        <label className="form-label">الاسم</label>
        <input type="text" className="form-control" />
      </div>

      <div className="mt-4 d-flex justify-content-between mb-4">
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="JO"
        />

        <label className="form-label me-2">العنوان</label>
        <input type="text" className="form-control w-50" />
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
