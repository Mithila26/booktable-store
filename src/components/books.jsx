import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material';

const defaultObj = [{
    {
                "Publisher": "Transworld",
                "id": 3,
                "name": "Angels and Demons",
                "Genre": "Crime, Thriller & Adventure",
                "author": "Brown, Dan"
            };
            {
                "Publisher": "Transworld",
                "id": 2,
                "name": "Da Vinci Code,The",
                "Genre": "Crime, Thriller & Adventure",
                "author": "Brown, Dan"
            };
            {
                "Publisher": "Bloomsbury",
                "id": 1,
                "name": "Harry Potter and the Deathly Hallows",
                "Genre": "Fiction",
                "author": "Rowling, J.K."
            }
}]
  
const Books =() => {
    const [books, setBook]=useState(defaultObj);
    const removeEntry =(id) =>{
        const updateBooks = books.filter(book =>book.id !==id);
        setBooks(updateBooks);
    }

    return (
        
       <TableContainer component={Books}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right"><Button variant="conatained" color="error">DeleteBook</Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow>
              
              <TableCell align="right">{book.id}</TableCell>
              <TableCell align="right">{book.Name}</TableCell>
              <TableCell align="right">{book.Author}</TableCell>
              <TableCell align="right">{book.Publisher}</TableCell>
              <TableCell align="right">{book.Genre}</TableCell>
              <TableCell align="right"><Button variant="conatained" color="error" onClick={() => removeEntry(book.id)}>DeleteBook</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default Books;