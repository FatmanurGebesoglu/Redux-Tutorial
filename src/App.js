import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import { updateUser } from './actions/userActions';

function App() {
  
  const onUpdateUser=()=>{
    this.props.onUpdateUser('Veli');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
      <h2>{this.props.user}</h2>
      <button onClick={onUpdateUser}>Change The User</button>
    </div>
  );
}

const mapStateToProps = (state,props) => {
  console.log(props);
  return {
    ...state,
    myCount: props.count + 2 ,
  }
};

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect (mapStateToProps,mapDispatchToProps)(App);
