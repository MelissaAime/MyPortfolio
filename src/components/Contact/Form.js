import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: 6, mt: 1, width: '25rem' },
        '& button': { mx: 12, my: 2 } 
      }}
      noValidate
      autoComplete="on"
    >
      
      <div>
        <TextField
          required
          id="name"
          label="Name"
          defaultValue=""
          variant="standard"
          color="secondary"
        />
        <TextField
          required
          id="email"
          label="Email"
          defaultValue=""
          variant="standard"
          color="secondary"
        />
        <TextField
          required
          id="text"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          color="secondary"
        />
        
      </div>
      <div>
        <Button 
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            onClick={() => {
                alert('Enviado');
              }}
        >
            Send
        </Button>
      </div>
    </Box>
  );
}
