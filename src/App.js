import React, { useState, Component } from 'react';
import Person from './Person/Person.js';
import radium from 'radium';
import './App.css';
import { render } from 'react-dom';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'wfdwfwd4', name: 'max', age: 28 },
      { id: 'sddw3', name: 'manu', age: 29 },
      { id: 'vfvwrrce5', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event,person.id)} />
          })
          }
        </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    }

    //let classes =['red','bold'].join(' ')
    const classes =[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi,I'm React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
