import React from "react";

const HeaderOne = ({ user, setUser }) => {
  return (
    <div className="flex justify-between p-10 text-2xl font-bold text-white">
      Welcome, {user}
      <button className="bg-blue-500 p-2 rounded-lg hover:bg-white hover:text-blue-500" onClick={() => setUser('')}>Logout</button>
    </div>
  );
};

export default HeaderOne;
