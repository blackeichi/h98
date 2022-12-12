import React from "react";

export const Home = () => {
  const onDelete = () => {
    window.localStorage.removeItem("h98-username");
    window.location.reload();
  };
  return <div onClick={onDelete}>Logout</div>;
};
