import React from "react";

function Copyright() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col sm:gap-2">
      <p className="text-right">Copyright &copy; {year}</p>
      <p className="text-right">All Rights Reserved</p>
    </div>
  );
}

export default Copyright;
