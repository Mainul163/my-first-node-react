import axios from "axios";
import { DELETE_USER_DATA, GET_TEST_DATA, POST_USER_DATA, SINGLE_USER_DATA,UPDATE_USER_DATA } from "./testAction";

export const testGet = async () => {
  let getTestData = await axios
    .get("http://localhost:5000/user")
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return {
    type: GET_TEST_DATA,
    testData: getTestData,
  };
};

export const postData = async (userData) => {
  await axios
    .post("http://localhost:5000/user", userData)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return {
    type: POST_USER_DATA,
    payload: userData,
  };
};

export const deleteData = async (id, data) => {
  const updateData = data.filter((data) => data?._id !== id);

  const userDeleteData = await axios
    .delete(`http://localhost:5000/user/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return {
    type: DELETE_USER_DATA,
    payload: updateData,
  };
};

export const singleUserData = async (id) => {

  const singleData=await axios.get(`http://localhost:5000/user/${id}`).then(res => res.data).catch(error => console.log(error))
return{
  type:SINGLE_USER_DATA,
  payload:singleData
}
}


export const updateUserData=async(id,user)=>{
console.log(user,id);
  const update=await axios.put(`http://localhost:5000/user/${id}`,user).then(res => res.data).catch(error => console.log(error))
  return{
    type:UPDATE_USER_DATA,
    payload:update
  }
}