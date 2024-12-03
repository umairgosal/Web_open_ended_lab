import React from "react";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemCardProps {
  item: Item;
  isMinimalist: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, isMinimalist }) => (
  <div className={`item-card ${isMinimalist ? "minimal" : "engaging"}`}>
    <h3>{item.name}</h3>
    {!isMinimalist && <p>{item.description}</p>}
  </div>
);

export default ItemCard;
