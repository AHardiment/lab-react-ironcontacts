import "./App.css";
import contactData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([...contactData].slice(0, 5));

  const tableOfFirstFiveContacts = contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img
            src={contact.pictureUrl}
            alt={contact.name}
            style={{ width: "100px" }}
          />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>
          Won an Oscar? {contact.wonOscar ? <span>✅</span> : <span>❌</span>}
        </td>
        <td>
          Won an Emmy? {contact.wonEmmy ? <span>✅</span> : <span>❌</span>}
        </td>
        <td>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  const addRandomContact = () => {
    const randomContact =
      contactData[Math.floor(Math.random() * contacts.length)];
    setContacts([...contacts, randomContact]);
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="random-contact">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar?</th>
            <th>Won an Emmy?</th>
          </tr>
        </thead>
        <tbody>{tableOfFirstFiveContacts}</tbody>
      </table>
    </div>
  );
}
export default App;
