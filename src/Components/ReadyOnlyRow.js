import React from "react";

const ReadOnlyRow = (props) => {
  return (
    <tr>
      <td scope="row">{props.contact.fullName}</td>
      <td>{props.contact.address}</td>
      <td>{props.contact.phoneNumber}</td>
      <td>{props.contact.email}</td>
      <td>
        <button type='button' onClick={(e)=>props.handleEditClick(e, props.contact)} className="btn btn-primary me-1">Edit</button>
        <button type='button' onClick={()=>props.handleDeleteClick(props.contact.id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
