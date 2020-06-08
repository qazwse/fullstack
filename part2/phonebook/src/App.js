import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

  useEffect(() => {
    console.log('Requesting data...')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Recevied response...', response)
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
    } 
    else {
      const newPerson ={
        name: newName,
        number: newNumber,
      }
      
      axios.post('http://localhost:3001/persons', newPerson)
           .then(response => {
            setPersons([...persons, response.data])
           })
           .catch(error => {
             console.log('Error communicating with server.')
           })

      setNewName('')
      setNewNumber('')
      setNameFilter('')
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
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App