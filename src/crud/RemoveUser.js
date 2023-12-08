import React, { useState } from "react";
import axios from "axios";

function RemoveUser() {
  const [data, setData] = useState([])

  const [state, setState] = useState(" ");

  const handleChange = (e) => {
    setState({ id: e.target.value });
  };

  const handleRemove = (evt) => {
    evt.preventDefault();

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${state.id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setData([response.data])

      });
  };

  return (
    <div>
      Remove User
      <div>
        <form onSubmit={handleRemove}>
          <label>
            User ID:
            <input type="number" name="id" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
      Users
      {data.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
            <p>{item?.id}</p>
            <p>{JSON.stringify(item)}</p>

          </div>
        );
      })}
    </div>
  );
}

export default RemoveUser;
