import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { singleUserData, updateUserData } from "../../store/testActionType";

const UpdateUser = () => {
  const [value,setValue]=useState({})
  const { id } = useParams();
  const singleUser=useSelector(data=>data?.testData?.testSingleDataList)
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
  setValue(singleUser)
  singleUserFun(id)
  
},[id,singleUser?.name,singleUser?.email])

  return (
    <div>
      
      
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" defaultValue={value?.name} required />
        <br /> <br />
        <input type="email" name="email" defaultValue={singleUser?.email} placeholder="email" required />
        <br /> <br />
        <input type="submit" value="add new user" />
      </form>
    </div>
  );
};

export default UpdateUser;
