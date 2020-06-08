import React from 'react';

const Persons = ({persons, nameFilter, deletePerson}) => {


    return ( 
        <ul>
            {persons.filter(person => person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())).map((person) => 
                <li key={person.id}>{person.name} - {person.number}
                <button onClick={() => deletePerson(person.id)}>Delete</button>
                </li> )}
        </ul>
    );
}
 
export default Persons;