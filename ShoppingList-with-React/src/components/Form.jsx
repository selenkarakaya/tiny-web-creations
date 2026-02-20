import { useState, useEffect } from "react";
import Button from "./shared/Button";

function Form({ handleAddItem, itemEdit, updateItem }) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (itemEdit.edit === true) setText(itemEdit.item.text);
  }, [itemEdit]);

  const addItem = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    if (text !== "") {
      setMsg(null);
      const newItem = { text: text };
      if (itemEdit.edit === true) {
        updateItem(itemEdit.item.id, newItem);
      } else {
        handleAddItem(newItem);
      }

      setText("");
    } else {
      setMsg("Please write item");
    }
  };

  return (
    <form id="item-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          id="item-input"
          name="item"
          placeholder="Enter Item"
          onChange={addItem}
          value={text}
        />
      </div>
      {msg && <div className="msg"> {msg}</div>}
      <div className="form-control">
        <Button type="submit">
          <i className="fa-solid fa-plus"></i> Add Item
        </Button>
      </div>
    </form>
  );
}

export default Form;
