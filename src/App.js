import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./Components/ReadyOnlyRow";
import EditableRow from "./Components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  const onChangeAddContactHandler = (event) => {
    event.preventDefault();

    const fileName = event.target.getAttribute("name");
    const fileValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fileName] = fileValue;

    setAddFormData(newFormData);
  };

  const onChangeEditContactHandler = (event) => {
    event.preventDefault();

    const fileName = event.target.getAttribute("name");
    const fileValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fileName] = fileValue;

    setEditFormData(newFormData);
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

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  const handleEditContactSubmit = (event)=>{
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === editContactId)

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();

    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row text-center py-2 m-0 bg-info">
        <h3 className="m-0">Table</h3>
      </div>
      <form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                  handleEditContactSubmit= {handleEditContactSubmit}
                    editFormData={editFormData}
                    onChangeEditContactHandler={onChangeEditContactHandler}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
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
              type="text"
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
