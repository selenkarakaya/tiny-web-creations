import ShoppingItem from "./ShoppingItem";
// import Button from "./shared/Button";

function ShoppingItemList({ items, handleDelete, handleEdit }) {
  if (!items || items.length === 0) {
    return <p>Your shopping list is empty</p>;
  }

  return (
    <div>
      <ul className="items">
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingItemList;
