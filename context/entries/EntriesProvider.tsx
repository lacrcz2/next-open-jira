import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';

interface Props {
    children?: React.ReactNode;
}
export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Aliquip velit laboris ad aliqua ipsum aliquip exercitation cupidatat enim irure duis incididunt mollit.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En progreso: Ut ad aliquip Lorem ipsum magna ipsum.',
            status: 'in-progress',
            createAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Proident consequat id veniam laboris ad commodo aute consequat ut ad ex pariatur pariatur.',
            status: 'finished',
            createAt: Date.now() - 100000,
        }
    ],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            status: 'pending',
            createAt: Date.now(),
        }

        dispatch({ type: '[Entry] Add-Entry' , payload: newEntry });
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: '[Entry] Entry-Update' , payload: entry });
    }

  return (
    <EntriesContext.Provider value={{
        ...state,
        // Methods
        addNewEntry,
        updateEntry,
    }}>
        { children }
    </EntriesContext.Provider>
  )
}