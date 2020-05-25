import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [displayPersons, setDisplayPersons] = useState([...persons])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')

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
  
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    console.log(newName, event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    console.log(newNumber, event.target.value)
  }

  return (
    <div>
      <h2>Filter</h2>
      <form>
        <div>
          search: <input value={nameFilter} onChange={handleFilterChange}/>
        </div>
      </form>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}>{person.name} - {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App