import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useParams } from 'react-router-dom';



export const  TableData = () => {

const [dataList, setDataList] = React.useState<any[]>([]);


React.useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    },  
   })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setDataList(data);
  });
}, []);

const navigate  = useNavigate();

const handleRouteAdd = () => { 
   navigate({
    pathname: '/create',
  })
}

const handleRouteEdit = (id:string) => { 
  navigate({
   pathname: '/details/' + id,
 })
}


  return (
    <Container>
        <h1>List of Data</h1>
        <div style={{ borderTop: "2px solid black ", marginLeft: 10, marginRight: 10, marginTop: 0 }}></div>
        <Grid container >
          <Grid item xs={12} style = {{display: 'flex',  justifyContent:   'end'}}>
            <Button  type="submit" variant="contained" style={{backgroundColor:'black', borderRadius: '20px' }}   onClick={() => handleRouteAdd()}  >Create item</Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper} style = {{width:  '80%', marginLeft: '140px'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="center">userId</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">body</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="center">{row.userId}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.body}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" startIcon={<EditIcon />}  onClick={() => handleRouteEdit(row.id)}>
                        Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
}
