import React from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../store/testActionType";

const Addusers = () => {
  const dispatch = useDispatch();

  const handleAddUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    dispatch(await postData(user));
  };

  return (
    <div>
      <h2>Please Add user</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" required />
        <br /> <br />
        <input type="email" name="email" placeholder="email" required />
        <br /> <br />
        <input type="submit" value="add new user" />
      </form>
    </div>
  );
};

export default Addusers;
