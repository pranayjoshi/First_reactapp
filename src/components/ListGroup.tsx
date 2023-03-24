import { MouseEvent, useState } from "react";

interface Props{

  items: string[]
  itemHeading: string
}

function ListGroup(props: Props) {
  

  const [selectedIndex, setSelectedIndex] = useState(-1)


  const citie = [];
  const na = props.items.length != 0 ? <h1 className="text-lg">{props.itemHeading}</h1> : null

  function HandleClick(index:number){ setSelectedIndex(index)};


  function Me(){
    return citie.length === 0 ? <p>No item Found!</p> : null
  }

  return (
    <>
    {na}
    {Me()}
      <ul className="list-group text-green-600">
        {props.items.map((item, index) => (
          <li className={ selectedIndex === index ? "text-blue-600" : ""} key={item} onClick={() => HandleClick(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
