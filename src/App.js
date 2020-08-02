import React, { useState, Component } from 'react';
import Person from './Person/Person.js';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'
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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              
              changed={(event) => this.nameChangeHandler(event, person.id)} />
              </ErrorBoundary>
          })
          }
        </div>
      );
      btnClass = classes.Red;
    }
    //let classes =['red','bold'].join(' ')
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (

      <div className={classes.App}>
        <h1>Hi,I'm React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}
export default App;
