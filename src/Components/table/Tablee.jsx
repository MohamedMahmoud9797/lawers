import Table from "react-bootstrap/Table";

const Tablee = () => {
  return (
    <Table striped hover dir="rtl">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tablee;
