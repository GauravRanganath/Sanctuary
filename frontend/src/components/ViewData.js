import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";

function ViewData() {
  // Retrieve Estuary files
  const [test, setTest] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY"
  ); // Put the Bearer key in a variable

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.estuary.tech/content/list", requestOptions)
    .then((response) => response.text())
    .then((result) => setTest(result))
    .catch((error) => console.log("error", error));

  return (
    <div>
      <NavBar></NavBar>
      <h1>Welcome to Sanctuary</h1>
      <SearchBar></SearchBar>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default ViewData;
