import { Section, ContactsList, ContactsEditor, Filter } from 'components';

export const App = () => {
  return (
    <>
      <Section title="PhoneBook">
        <ContactsEditor />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
