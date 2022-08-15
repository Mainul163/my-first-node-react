import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, testGet } from "../../store/testActionType";

const Home = () => {
  const user = useSelector((data) => data?.testData?.testDataList);
  const dispatch = useDispatch();
  const getUser = async () => {
    dispatch(await testGet());
  };

  useEffect(() => {
    getUser();
  }, []);
  const handleUser = async (id, data) => {
    const confirm = window.confirm("Are you Sure?");

    if (confirm) {
      console.log(data, id);
      dispatch(await deleteData(id, data));
    }
  };
  return (
    <div>
      {/* <p>name: {user?.name}</p> */}
      <ul>
        {user?.map((data) => (
          <li key={data?._id}>
            {data?.name}{" "}
            <button onClick={() => handleUser(data?._id, user)}>X</button>{" "}
            <Link to={`/update/${data?._id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
