import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./LoginForm.scss"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function LoginForm() {
    
  return (
    <div className='loginform' style={{display: 'flex', maxWidth: "40rem", flexDirection:'column'}}>


        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='email'>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='password'>
        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>
        
        <div style={{display: 'flex', width: '5rem', background:'blue',justifyContent:'center', alignItems:'center', borderRadius: "30px"}}>
        <Button sx={{color: "white"}}>
          Submit
        </Button>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent: 'flex-end', marginTop: '1rem'}}>
        <div style={{display: 'flex', width: '10rem', borderRadius: "30px"}}>
        <Button>
        <Link to="/studentregister">
          Register as student
        </Link>
        </Button>
        </div>
        <div style={{display: 'flex', width: '10rem', borderRadius: "30px" }}>
        <Button>
        <Link to="/teacherregister">
          Register as teacher
        </Link>
        </Button>
        </div>
        </div>
    </div>
  )
}

export default LoginForm