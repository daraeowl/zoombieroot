import React, { useEffect } from 'react';
import { Button, Box, TextField, Container, Paper } from '@mui/material/';
import { AccountCircle, Password } from '@mui/icons-material/';




export default function User() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [users, setUsers] = React.useState([]);


  const handleClick = (e) => {
    e.preventDefault();
    const user = { name, password }
    console.log(user)
    fetch("http://localhost:8080/user/add", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      console.log("new user added")
    })
  }

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then(res => res.json())
      .then((result) => {
        setUsers(result)
      }
      )
  }, [])

  return (

    <Container>
      <Paper elevation={10} style={paperStyle}>
        <h1 style={{ color: "blue" }}><u>Crear Usuario</u></h1>

        <form className='classes.root' noValidate autoComplete="off">
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Usuario" variant="standard" fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Password sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic" label="Contraseña" variant="standard" fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="secondary" onClick={handleClick} >
            Registrar
          </Button>
        </form>
        <h1> Usuarios</h1>
        {users.map(user => (
            <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={user.id}>
              <h3>Id: {user.id}</h3>
              <h3>UserName: {user.name}</h3>
            </Paper>
          ))}
      </Paper>
    </Container>

  );
}