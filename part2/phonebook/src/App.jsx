import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
    setPersons((prevPersons) => [...prevPersons, { name: newName }]);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleClick}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, idx) => (
          <li key={idx}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
