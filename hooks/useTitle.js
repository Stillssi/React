import "./App.css";
import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
// function App() {
//   const titleUpdator = useTitle("Loading...");
//   return <div className="App"></div>;
// }

// export default App;
