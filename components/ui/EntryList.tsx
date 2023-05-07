import { DragEvent, FC, useContext, useMemo } from 'react';
import { List, Paper } from "@mui/material"

import { EntriesContext } from '../../context/entries';
import { UIContext } from '@/context/ui';

import { EntryCard } from "./"
import { EntryStatus } from "../../interfaces"

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries, updateEntry } = useContext( EntriesContext );
  const { isDragging, endDragging } = useContext( UIContext );

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ])

  const allowDrop = ( event: DragEvent ) => {
    event.preventDefault();
  }

  const onDropEnry = ( event: DragEvent ) => {
    const id = event.dataTransfer.getData('text');
    
    const entry = entries.find( e => e._id === id )!;
    entry.status = status;

    updateEntry( entry ); endDragging();
  }

  return (
    <div
      onDrop={ onDropEnry }
      onDragOver={ allowDrop }
      className= { isDragging ? styles.dragging : '' }
    >
        <Paper sx={{ height: 'calc(100vh - 180px)', overflowY: 'scroll', backgroundColor: 'transparent', padding: '3px 5px',
          "&::-webkit-scrollbar": { width: "3px", bgcolor: "#454545" },
          "&::-webkit-scrollbar-thumb": { background: "#B1B1B1", border: "7px none #fffff", borderRadius: "10px" }
        }}>
            <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={ entry._id } entry={ entry } />
                  ))
                }
            </List>
        </Paper>
    </div>
  )
}
