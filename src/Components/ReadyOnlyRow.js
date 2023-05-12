import React from "react";

const ReadOnlyRow = (props) => {
  return (
    <tr>
      <td scope="row">{props.contact.fullName}</td>
      <td>{props.contact.address}</td>
      <td>{props.contact.phoneNumber}</td>
      <td>{props.contact.email}</td>
      <td>
        <button onClick={(e)=>props.handleEditClick(e, props.contact)} className="btn btn-primary">Edit</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
