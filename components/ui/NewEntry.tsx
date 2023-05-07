import { ChangeEvent, useState, useContext } from "react";
import { Box, Button, TextField } from "@mui/material"

import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntriesContext } from "../../context/entries";
import { UIContext } from "@/context/ui";

export const NewEntry = () => {
    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
    
    const [touched, setTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return;

        addNewEntry( inputValue );
        setIsAddingEntry( false );
        setTouched( false );
        setInputValue('');
    }
    console.log('|||', isAddingEntry);
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
        {
            isAddingEntry ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1}}
                        placeholder='Nueva Entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText= { inputValue.length <= 0 && touched && 'Ingrese un valor' }
                        error= { inputValue.length <= 0 }
                        value= { inputValue }
                        onChange={ onTextFieldChanges }
                        onBlur={ () => setTouched(true) }
                    />

                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='text'
                            onClick={() => setIsAddingEntry( false ) }
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveOutlinedIcon /> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>  
                </>
            ) : (
                <Button
                    startIcon={ <AddIcon /> }
                    fullWidth
                    variant='outlined'
                    onClick={() => setIsAddingEntry( true ) }
                >
                    Agregar tarea
                </Button>
            )
        }
    </Box>
  )
}
