import * as React from 'react';
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';


export const Details = () => {

  interface  ISingle {
    userId: number;
    id: number;
    title: string;
    body:  string;
  }


  const [single, setSingle] = React.useState<ISingle | undefined>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [title, setTitle] = React.useState<string | undefined>();
  const [body, setBody] = React.useState<string | undefined>();
  const [userId, setUserId] = React.useState<string | undefined>();
  const [showSuccessAlert, setshowSuccessAlert] = React.useState<boolean | undefined>(false);
  const [showFailAlert, setshowFailAlert] = React.useState<boolean | undefined>(false);
  const { id } = useParams();



  const navigate  = useNavigate();

  const handleSubmitEdit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      title: data.get('title'),
      body: data.get('body'),
      userId: data.get('userId'),
    });

    
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: data.get('title'),
        body: data.get('body'),
        userId:  data.get('userId'),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        navigate({
          pathname: '/',
        })
      });

  };


  const handleSubmitDelete = () => { 
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE',
    })
    .then(() => { navigate({
        pathname: '/',
      })
    });

  };


  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then((response) => response.json())
    .then((json) =>  {
        setSingle(json);
        setTitle(json.title);
        setBody(json.body);
        setUserId(json.userId);
    });
  }, []);


  console.log(single);

  return (
    <Container component="main" maxWidth="xs" style={{marginTop: 140}} >
        <CssBaseline />
        <Box  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} ><h1>Edit item</h1></Box>
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
          <Box component="form" noValidate  onSubmit={handleSubmitEdit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  id="title"
                  name="title"
                  placeholder='Title...'
                  autoComplete="title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  fullWidth
                  name="body"
                  type="body"
                  id="body"
                  placeholder='Body...'
                  autoComplete="body"
              
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                  fullWidth
                  name="userId"
                  type="userId"
                  id="userId"
                  placeholder='UserId...'
                  autoComplete="userId"
              
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box style={{paddingTop: '15px', display:   'flex',  justifyContent:  'flex-start'}}>
                  <Button
                    type="submit" 
                    variant="contained"
                    style={{backgroundColor:'black'}}
                  >
                    Update
                  </Button>
                </Box>
                </Grid>
                <Grid item xs={6}>
                <Box style={{paddingTop: '15px', display:   'flex',  justifyContent:  'flex-end'}}>
                  <Button
                    type="button" 
                    onClick={() => handleSubmitDelete()}
                    variant="contained"
                    style={{backgroundColor:'black'}}
                  >
                    Delete
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
       
      </Container>
  );
}