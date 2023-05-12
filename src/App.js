import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const onChangeAddContactHandler = (event) => {
    event.preventDefault();

    const fileName = event.target.getAttribute("name");
    const fileValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fileName] = fileValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact]

    setContacts(newContacts);
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row text-center py-2 m-0 bg-info">
        <h3 className="m-0">Table</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td scope="row">{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="bg-light p-2">Add a Contact</h4>
      <form onSubmit={handleAddFormSubmit}>
        <div class="row">
          <div class="col">
            <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a name..."
              name="fullName"
              onChange={onChangeAddContactHandler}
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter an address..."
              name="address"
              onChange={onChangeAddContactHandler}
            />
          </div>
          <div class="col">
            <input
              type="number"
              className="form-control"
              required="required"
              placeholder="Enter a phone number..."
              name="phoneNumber"
              onChange={onChangeAddContactHandler}
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter an email..."
              name="email"
              onChange={onChangeAddContactHandler}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
