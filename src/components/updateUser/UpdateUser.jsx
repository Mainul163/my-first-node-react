import React from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div>
      <p>id:{id}</p>
    </div>
  );
};

export default UpdateUser;
