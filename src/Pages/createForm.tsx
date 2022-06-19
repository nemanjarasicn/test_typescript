import * as React from 'react';
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';


export const CreateForm = () => {
  
  const navigate  = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      title: data.get('title'),
      body: data.get('body'),
    });

    
      fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          username: data.get('title'),
          password: data.get('body')
      })})
      .then((res) => res.json())
      .then((data) => { 
        navigate({
          pathname: '/',
        })
      })
    
  };

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: 140}} >
        <CssBaseline />
        <Box  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} ><h1>Create Item</h1></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'solid 1px',
            borderRadius: '5px',
            padding: '15px',
            
          }}
        >
          <Box component="form" noValidate  onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  placeholder='Title...'
                  autoComplete="title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="body"
                  type="body"
                  id="body"
                  placeholder='Body...'
                  autoComplete="body"
              
                />
              </Grid>
            </Grid>
            <Box style={{paddingTop: '15px', display:   'flex',  justifyContent:  'center'}}>
              <Button
                type="submit"
                
                variant="contained"
                style={{backgroundColor:'black'}}
              >
                Save
              </Button>
            </Box>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
       
      </Container>
  );
}