import React from "react";
import ItemCard from "./ItemCard";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemListProps {
  isMinimalist: boolean;
}

const ItemList: React.FC<ItemListProps> = ({ isMinimalist }) => {
  const items: Item[] = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
  ];

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} isMinimalist={isMinimalist} />
      ))}
    </div>
  );
};

export default ItemList;
