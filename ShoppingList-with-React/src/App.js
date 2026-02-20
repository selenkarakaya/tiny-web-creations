import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ShoppingItemList from "./components/ShoppingItemList";
import ShoppingData from "./data/ShoppingData";
import "./App.css";

function App() {
  const [items, setItems] = useState(ShoppingData);
  const [itemEdit, setItemEdit] = useState({ item: {}, edit: false });
  // add item
  const addItem = (newItem) => {
    console.log(newItem);
    newItem.id = uuidv4();
    setItems([newItem, ...items]);
  };
  // delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  //update item
  const editItem = (item) => {
    setItemEdit({ item, edit: true });
  };

  // update item
  const updateItem = (id, updItem) => {
    setItems(
      items.map((item) => (item.id === id ? { ...items, ...updItem } : item))
    );
  };

  return (
    <div className="container">
      <Header />
      <Form
        handleAddItem={addItem}
        itemEdit={itemEdit}
        updateItem={updateItem}
      />
      <ShoppingItemList
        items={items}
        handleDelete={deleteItem}
        handleEdit={editItem}
      />
    </div>
  );
}

export default App;
