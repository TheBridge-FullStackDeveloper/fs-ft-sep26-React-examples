import { useState } from 'react';

export default function Form() {
    // 2 estados
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    //Fragment 
    <>
      <h2>Regístrate</h2>
      <label>
        Nombre:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Apellido:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Tu ticket será emitido a: <b>{`${firstName} ${lastName}`}</b>
      </p>
    </>
  );
}
