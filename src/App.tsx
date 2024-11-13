import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import DeleteIcon from "./components/Button/Icons/DeleteIcon";
import CheckIcon from "./components/Button/Icons/SubmitIcon";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    alert("Hejsan");
  };

  const handleDelete = () => {
    alert("Delete");
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <>
      <form action="">
        <Button
          icon={<CheckIcon />}
          type="submit"
          ariaLabel="Test button"
          onClick={handleSubmit}
          variant="success"
          size="large"
          disabled={disabled}
          loading={loading}
          fullWidth
          // outlined
        >
          submit
        </Button>
      </form>
      <Button
        disabled={disabled}
        loading={loading}
        icon={<DeleteIcon />}
        type="button"
        size="large"
        variant="danger"
        ariaLabel="Delete button"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        disabled={disabled}
        loading={loading}
        icon={<DeleteIcon />}
        type="button"
        size="large"
        variant="primary"
        ariaLabel="Button"
        onClick={handleDelete}
      >
        Button
      </Button>
      <div>
        {" "}
        <Button
          type="button"
          variant="success"
          size="small"
          ariaLabel="Toggle disabled"
          onClick={toggleDisabled}
        >
          Toggle disabled
        </Button>
        <Button
          type="button"
          variant="danger"
          size="small"
          ariaLabel="Toggle loading"
          onClick={toggleLoading}
        >
          Toggle loading
        </Button>
      </div>
    </>
  );
}

export default App;
