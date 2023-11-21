import Dropdown from 'react-bootstrap/Dropdown';
import './DropDown.css'
import Tablee from '../table/Tablee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const DropDownn = () => {
  return (
    <>
      

      <Dropdown className='d-flex justify-content-end align-items-center '>
      <Dropdown.Toggle  className='bg-light text-primary custom-btn  ' id="dropdown-basic" >
      الاجراءات السابقة 
        <FontAwesomeIcon icon={faChevronDown} size='lg' />  

      </Dropdown.Toggle>
           <Dropdown.Menu className='w-100'>
      <Tablee/>
      </Dropdown.Menu>
    </Dropdown>

    </>
  )
}

export default DropDownn
