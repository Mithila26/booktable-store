import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Book 1', author: 'Author A', Genre: 'Fantasy', Publisher: 'Publisher X' },
  { id: 2, name: 'Book 2', author: 'Author B', Genre: 'Science Fiction', Publisher: 'Publisher Y' },
  { id: 3, name: 'Book 3', author: 'Author C', Genre: 'Mystery', Publisher: 'Publisher Z' },
];

const TableItem = ({ item, onDelete }) => {
  return (
    <tr style={{ border: '1px solid black' }}>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>{item.id}</td>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>{item.name}</td>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>{item.author}</td>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>{item.Genre}</td>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>{item.Publisher}</td>
      <td style={{ border: '1px solid black', padding: '10px', fontSize: '20px' }}>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </td>
    </tr>
  );
};

const AddForm = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [Genre, setGenre] = useState('');
  const [Publisher, setPublisher] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: parseInt(id), name, author, Genre, Publisher };
    onSubmit(newItem);
    setId('');
    setName('');
    setAuthor('');
    setGenre('');
    setPublisher('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', fontSize: '20px', marginTop: '20px' }}>
      <div style={{ padding: '10px' }}>
        <label>ID: </label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Author: </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Genre: </label>
        <input type="text" value={Genre} onChange={(e) => setGenre(e.target.value)} required />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Publisher: </label>
        <input type="text" value={Publisher} onChange={(e) => setPublisher(e.target.value)} required />
      </div>
      <button type="submit" style={{ padding: '10px', fontSize: '20px' }}>Submit</button>
    </form>
  );
};

const ItemTable = () => {
  const [data, setData] = useState(initialData);

  const handleAdd = (newItem) => {
    setData([...data, newItem]);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', fontSize: '20px' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Author</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Genre</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Publisher</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableItem key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
      <AddForm onSubmit={handleAdd} />
    </div>
  );
};

export default ItemTable;
