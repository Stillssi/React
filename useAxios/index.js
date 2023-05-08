import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import useAxios from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading} \n Error: ${error}\n Data: ${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>새로고침</button>
    </div>
  );
}

export default App;
