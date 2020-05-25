import React from 'react';

const PersonField = ({fieldName, fieldValue, fieldHandler}) => {
    return (
        <div>
            {fieldName}: <input value={fieldValue} onChange={fieldHandler}/>
        </div>
    )
}

const PersonForm = (props) => {
    return ( 
        <form onSubmit={props.addPerson}>
            <PersonField fieldName="name" fieldValue={props.newName} fieldHandler={props.handleNameChange} />
            <PersonField fieldName="number" fieldValue={props.newNumber} fieldHandler={props.handleNumberChange} />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
     );
}
 
export default PersonForm;