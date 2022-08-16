import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { singleUserData, updateUserData } from "../../store/testActionType";

const UpdateUser = () => {
  const { id } = useParams();
  const singleUser=useSelector(data=>data)
const dispatch=useDispatch()
const singleUserFun=async(id)=>{
  dispatch(await singleUserData(id))
}

const handleAddUser = async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const user = { name, email };
  dispatch(await updateUserData(id,user));
};
useEffect(()=>{
  singleUserFun(id)
  
},[id])

console.log(singleUser)
  return (
    <div>
      <p>id:{id}</p><br />

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

export default UpdateUser;
