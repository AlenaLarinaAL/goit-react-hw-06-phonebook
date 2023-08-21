import { configureStore } from '@reduxjs/toolkit';
import { filter } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filter,
  },
});

export const persistor = persistStore(store);
