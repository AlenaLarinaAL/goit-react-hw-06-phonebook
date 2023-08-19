import { useEffect, useState } from 'react';
import {
  Section,
  ContactsList,
  ContactsEditor,
  Filter,
  Notification,
} from 'components';

import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (name, number) => {
    const isDuplicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const addNewContact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts(prevContact => [addNewContact, ...prevContact]);
  };

  const handleDelete = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section title="PhoneBook">
        <ContactsEditor onSubmit={createContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
          <ContactsList
            contacts={getFilteredContacts(contacts)}
            handleDelete={handleDelete}
          />
        ) : (
          <Notification message="There is no contacts"></Notification>
        )}
      </Section>
    </>
  );
};

////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import {
//   Section,
//   ContactsList,
//   ContactsEditor,
//   Filter,
//   Notification,
// } from 'components';

// import { nanoid } from 'nanoid';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacs = JSON.parse(contacts);

//     if (parsedContacs) {
//       this.setState({ contacts: parsedContacs });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contats) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   createContact = ({ name, number }) => {
//     const isDuplicate = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isDuplicate) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const addNewContact = {
//       id: nanoid(5),
//       name,
//       number,
//     };

//     this.setState(({ contacts }) => ({
//       contacts: [addNewContact, ...contacts],
//     }));
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <>
//         <Section title="PhoneBook">
//           <ContactsEditor onSubmit={this.createContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           {contacts.length > 0 ? (
//             <ContactsList
//               contacts={filteredContacts}
//               handleDelete={this.handleDelete}
//             />
//           ) : (
//             <Notification message="There is no contacts"></Notification>
//           )}
//         </Section>
//       </>
//     );
//   }
// }
// export default App;
