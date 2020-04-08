import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };


  }
  componentDidMount() { // life cycle methods
    fetch("https://jsonplaceholder.typicode.com/users") //recieve promise
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange=(e)=>{
    this.setState({ searchField: e.target.value })
    
  } 

  render() {
    const { monsters, searchField } = this.state; // similar with const monsters=this.state.monsters const searchField=this.state.searchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App"> 
      <h1 class="label">React Search </h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
