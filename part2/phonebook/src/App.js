import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  useEffect(() => {
    console.log('Getting initial server data...')
    personService
      .getAll()
      .then(serverResponse => {
        setPersons(serverResponse)
      })
  }, [])

  const updatePerson = (person) => {
    const np = {...person, number:newNumber}

    personService.updatePerson(np).then(returnedPerson => {
      setPersons(persons.map(p => p.id !== np.id ? p : returnedPerson))
    })
  }

  const addPerson = (event) => {
    event.preventDefault()

    const person = persons.find(person => person.name === newName)
    if (person) {
      if (window.confirm(`${person.name} already exists, would you like to update?`)) {
        updatePerson(person)
      }      
    } 
    else {
      const newPerson ={
        name: newName,
        number: newNumber,
      }
      
      personService
        .create(newPerson)
        .then(serverResponse => {
          setPersons(persons.concat(serverResponse))
          setNewName('')
          setNewNumber('')
          setNameFilter('')
        })
    }    
  }

  const deletePerson = (id) => {
    console.log(id)
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
      personService
        .deletePerson(id)
        .then(serverResponse => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)  
  }

  return (
    <div>
      <h2>Filter</h2>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App