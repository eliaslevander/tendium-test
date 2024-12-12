import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  const handleClick = () => {
    alert("Click!");
  };

  return (
    <>
      <div className="button__container">
        <Button
          outlined
          size="large"
          loading={loading}
          disabled={disabled}
          type="button"
          onClick={handleClick}
          ariaLabel="Test button"
          variant="success"
        >
          button
        </Button>
      </div>

      <div className="controls__container">
        <Button
          type="button"
          size="small"
          onClick={toggleDisabled}
          variant="primary"
          ariaLabel="Toggle disabled"
        >
          Toggle disabled
        </Button>
        <Button
          type="button"
          size="small"
          onClick={toggleLoading}
          variant="danger"
          ariaLabel="Toggle disabled"
        >
          Toggle loading
        </Button>
      </div>
    </>
  );
}

export default App;
