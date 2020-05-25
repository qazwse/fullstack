import React from 'react';

const Persons = ({persons, nameFilter}) => {
    return ( 
        <ul>
            {persons.filter(person => person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())).map((person) => <li key={person.name}>{person.name} - {person.number}</li>)}
        </ul>
    );
}
 
export default Persons;