import { useState, useEffect } from "react";
import "./App.css";
import { EmployeeData } from "./EmployeeData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // const[salary, setSalary]= useState(0)
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if (dt !== undefined) {
      setUpdate(true);
      setId(id);
      setName(dt[0].name);
      setAddress(dt[0].address);
      // setSalary(dt[0].salary);
      setAge(dt[0].age);
    }
  }
  // delete function
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  //save function
  const handleSave = (id) => {
    let error = "error is occured";
    if (name === "") error += "name is required";
    if (address === "") error += "address is required";
    if (age <= 0 && age >= 90) error += "Please enter valid age";
    if (error !== "") {
      // e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: EmployeeData.length + 1,
        name: name,
        address: address,
        // salary:salary,
        age: age
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  };

  

  //update function

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].name = name;
    dt[index].address = address;
    dt[index].age = age;
    setData(dt);
    handleClear();
  };
  const handleClear = (id) => {
    setId(0);
    setName('');
    setAddress('');
    // setSalary('');
    setAge('');
    setUpdate(false);
  };

  return (
    <>
    <h2 className="text-center my-3 text-uppercase">Employee List</h2>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom:"30px" }}
      >
        <div style={{ padding: "10px" }}>
          <label htmlFor="" className="pe-3">Name :</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="" className="pe-3">Address :</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        
        <div style={{ padding: "10px" }}>
          <label htmlFor="" className="pe-3">Age :</label>
          <input
            type="text"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div>
          {!isUpdate ? (
            <button className="btn btn-primary me-3" onClick={() => handleSave()}>
              Save
            </button>
          ) : (
            <button className="btn btn-primary me-3" onClick={() => handleUpdate()}>
              Update
            </button>
          )}
          <button className="btn btn-danger me-3" onClick={() => handleClear()}>
            clear
          </button>
        </div>
      </div>

      <Table striped bordered hover className="table table hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            {/* <th>Salary</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                {/* <td>{item.salary}</td> */}
                <td>
                  <button
                    className="btn btn-primary "
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
