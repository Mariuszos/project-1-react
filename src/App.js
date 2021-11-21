import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Persons from "./components/Persons"
import Offers from "./components/Offers"

function App() {
  return (
    <div className="App">
			<div className="container">
      	<Header name="Moja firma" />
				<Main />
				<Persons />
				<Offers title="Czym zajmuje się nasza firma?" />
			</div>
    </div>
  );
}

export default App;