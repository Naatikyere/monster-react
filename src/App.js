import React, {Component} from 'react';
import {CardList} from "./components/card-list/cardlist"
import './App.css';
import { SearchBox } from './components/searchBox/search-box.component';

 class App extends Component{
      constructor(){
        super();
        this.state= {
          monsters: [],

          SearchField:''
        }
       
      }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(user=>this.setState({monsters:user}));
        
      }
      changeHandler = (e) => {this.setState({SearchField:e.target.value});
    }

      render(){
        const {monsters, SearchField}=this.state;

        const filteredMonsters = monsters.filter(monster => (monster.name.toLowerCase().includes(SearchField.toLowerCase())));
        
        return(
          <div className='App'>
            <h1 className='Names'>Monster Rolex</h1>
             <SearchBox alt='monsters' placeholder={'search monsters'}
             changeHandler={this.changeHandler}
             />
            <CardList monsters={filteredMonsters} /> 
          </div>

        )
      }
  }

  export default App;


