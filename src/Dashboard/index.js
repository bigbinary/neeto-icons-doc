import React, { useState } from "react";
import Header from "./Header";
import IconList from "./IconList";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <IconList searchTerm={searchTerm}/>
    </>
  );
}

export default Dashboard;
