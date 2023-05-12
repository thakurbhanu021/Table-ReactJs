import React from "react";

const EditableRow = (props) => {
    return (
        <tr>
        <td scope="row">
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a name..."
              name="fullName"
              value={props.editFormData.fullName}
              onChange={props.onChangeEditContactHandler}
            />
        </td>
        <td>
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a address..."
              value={props.editFormData.address}
              name="address"
              onChange={props.onChangeEditContactHandler}
            />
        </td>
        <td>
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a phone number..."
              value={props.editFormData.phoneNumber}
              name="phoneNumber"
              onChange={props.onChangeEditContactHandler}
            />
        </td>
        <td>
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter an email..."
              value={props.editFormData.email}
              name="email"
              onChange={props.onChangeEditContactHandler}
            />
        </td>
        <td>
            <button type="submit" className="btn btn-primary" onClick={props.handleEditContactSubmit}>Save</button>
        </td>
      </tr>
    )
}

export default EditableRow;