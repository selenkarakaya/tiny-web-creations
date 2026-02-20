function ShoppingItem({ item, handleDelete, handleEdit }) {
  return (
    <li>
      {item.text}

      <button className="btn-remove">
        <i
          className="fa-solid fa-xmark"
          onClick={() => handleDelete(item.id)}
        ></i>
      </button>
      <button onClick={() => handleEdit(item)}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>
    </li>
  );
}

export default ShoppingItem;
