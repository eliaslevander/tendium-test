import { useState } from "react";
import "./App.css";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          onClick={toggleDisabled}
          style={{
            backgroundColor: "#000",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>
        <div
          onClick={toggleLoading}
          style={{
            backgroundColor: "#aaa",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
