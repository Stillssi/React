import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

// function App() {
//   // const maxLength = (value) => value.length <= 10;
//   const maxLength = (value) => !value.includes("@");
//   const name = useInput("Mr.", maxLength);
//   return (
//     <div className="App">
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// }
