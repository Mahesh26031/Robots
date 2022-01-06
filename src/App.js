
import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import { robots } from './robots';
import Scroll from './Scroll';
import SearchBox from './SearchBox'



class App extends Component {
  constructor()
  {
    super()
    this.state={
      robots : [],
      searchfield : ''

    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    })
    .then(users=>{
      this.setState({robots: users})

    })
  

  }

  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
   
  }
 render(){ 
  const filter=this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  if(this.state.robots.length===0)
  {
    return <h1>Loading</h1>
  }else{

  

  return(
    <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>

    <CardList robots={filter}/>
    </Scroll>
    </div>

  );}}
}

export default App;
