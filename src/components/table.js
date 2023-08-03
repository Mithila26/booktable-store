import React, { useState, useEffect } from "react";
import axios from 'axios';
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { id, name, author, genre, publisher } = rowsData;
    return (
      <tr key={index}>
       <td>
          <input
            type="text"
            value={id}
            onChange={(event) => onValUpdate(index, event)}
            name="id"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
         <td>
          <input
            type="text"
            value={author}
            onChange={(event) => onValUpdate(index, event)}
            name="author"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={genre}
            onChange={(event) => onValUpdate(index, event)}
            name="genre"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={publisher}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const API_URL='http://ulnvwk3a5j.execute-api.us-east-1.amazonaws.com/dev/store/get';

  useEffect(() => {
    const getData = async () => {
    const response = await axios.get(API_URL)
    }
    getData();
  },[]
  )

  const addRowTable = () => {
    const data = {
      id: "",
      name: "",
      author: "",
      genre: "",
      publisher: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <div>
      <h2 className="text-center">Book Store App</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </div>
);
}
export default Table;