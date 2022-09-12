import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-field/search-field.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Contact List</h1>
        <SearchField
          type={"search"}
          classname={"search-box"}
          placeholder={"Search Monsters"}
          onChange={onSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
