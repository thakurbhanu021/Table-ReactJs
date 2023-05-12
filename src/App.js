import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./mock-data.json";

function App() {
  const [contacts, setContacts] = useState(data);

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
      <form>
        <div class="row">
          <div class="col">
            <input
              type="text"
              className="form-control"
              required='required'
              placeholder="Enter a name..."
              name="name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              required='required'
              placeholder="Enter an address..."
              name="address"
            />
          </div>
          <div class="col">
            <input
              type="number"
              className="form-control"
              required='required'
              placeholder="Enter a phone number..."
              name="phonenumber"
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              required='required'
              placeholder="Enter an email..."
              name="email"
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
