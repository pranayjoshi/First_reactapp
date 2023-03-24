import { MouseEvent, useState } from "react";


interface Props {
  items: string[];
  itemHeading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, itemHeading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const citie = [];
  const na =
    items.length != 0 ? <h1 className="text-lg">{itemHeading}</h1> : null;

  function HandleClick(index: number, item: string) {
    setSelectedIndex(index);
    onSelectItem(item);
  }

  function Me() {
    return citie.length === 0 ? <p>No item Found!</p> : null;
  }

  return (
    <>
      {na}
      {Me()}
      <ul className="list-group text-green-600">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "text-blue-600" : ""}
            key={item}
            onClick={() => HandleClick(index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
