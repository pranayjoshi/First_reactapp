import './App.css'
import ListGroup from './components/ListGroup';
import Message from './Message'

function App() {
  const cities = ["Hyderabad", "Delhi", "Haldwani", "Kanpur"];
  return(
    <div>
    <Message></Message>
    <ListGroup items={cities} itemHeading="Hello World"/>
    </div>
  );
}

export default App;