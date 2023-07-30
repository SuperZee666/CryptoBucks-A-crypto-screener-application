import React from "react";
import TableComponent from "../components/TableComponent";
import Filters from "../components/Filters";

const Crypto = () => {
  return (
    <div className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <TableComponent />
    </div>
  );
};

export default Crypto;
