import React from "react";

const EditableRow = () => {
    return (
        <tr>
        <td scope="row">
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a name..."
              name="fullName"
            />
        </td>
        <td>
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter a address..."
              name="address"
            />
        </td>
        <td>
        <input
              type="number"
              className="form-control"
              required="required"
              placeholder="Enter a phone number..."
              name="phoneNumber"
            />
        </td>
        <td>
        <input
              type="text"
              className="form-control"
              required="required"
              placeholder="Enter an email..."
              name="email"
            />
        </td>
      </tr>
    )
}

export default EditableRow;