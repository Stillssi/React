import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
};

// function App() {
//   const handleNetworkChange = (online) => {
//     console.log(online ? "We just went online" : "We are offline");
//   };
//   const onLine = useNetwork(handleNetworkChange);
//   return (
//     <div className="App">
//       <h1>{onLine ? "Online" : "Offline"}Hello</h1>
//     </div>
//   );
// }

// export default App;
