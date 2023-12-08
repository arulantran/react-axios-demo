import React, { useState } from "react";
import axios from "axios";
import Users from "./Users";

function AddUser() {
  const [data, setData] = useState([])
  const [name, setName] = useState({
    name: " ",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setName({
      name: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { name })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData([res.data])
      });
  };

  return (
    <div>
     
      <p>Add Users</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <div>
       </div>
       </div>    
       Users
      {data.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name.name}</p>
            <p>{item?.id}</p>
            <p>{JSON.stringify(item)}</p>

          </div>
        );
      })}
       </div>
  );
}

export default AddUser;
