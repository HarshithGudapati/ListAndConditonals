import React, { useState, Component } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit'
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
    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }
    //let classes =['red','bold'].join(' ')
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}
export default App;
