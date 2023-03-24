import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import Message from './Message'

function App() {
  const cities = ["Hyderabad", "Delhi", "Haldwani", "Kanpur"];
  const text = "This is some informational text that you can use to show some alert content"
  const HandleItem = (item: string) => {
    console.log(item)
  }

  const HandleAlert = () => {
    setAlertVis(!alertVis)
  }

  const [alertVis, setAlertVis] = useState(false)
  return(
    <div>
      <Message></Message>
      <ListGroup items={cities} itemHeading="Hello World" onSelectItem={HandleItem}/>
      {alertVis ? <Alert toggle={HandleAlert}>
        <h1 className='text-lg text-red-600'>{text}</h1>
      </Alert> : null}
      <Button color="red" onClick={() =>  HandleAlert() }> My Button</Button>
    </div>
  );
}

export default App;