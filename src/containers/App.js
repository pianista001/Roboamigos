import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => this.setState({robots: users}));
}
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
      }
render () {
  const filteredRobot = this.state.robots.filter(robot =>{
  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})
if (!this.state.robots.length) {
  return <h1>LOADING</h1>
} else {
  return (
  <div className='tc'>
  <h1 className="f1">Roboamigos</h1>
  <SearchBox searchChange={this.onSearchChange}/>
  <Scroll>
    <ErrorBoundry>
    <CardList robots={filteredRobot}/>
    </ErrorBoundry>
  </Scroll>
  </div>
  );
  }
}
}

export default App;
