import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import "./TeacherRegistration.scss"
import { Button } from '@mui/material';


function TeacherRegistration() {
    
  return (
    <div className='teacherregistration' style={{display: 'flex', maxWidth: "40rem", flexDirection:'column'}}>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Profile Image
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='teacherId'>
        <TextField
            id="outlined-basic"
            variant="outlined"
            type="file"
            inputProps={{ accept: 'image/*' }}
            // onChange={handleImageSelect}
            sx={{ marginBottom: '2rem', width:'100%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary" component="label">
                    <PhotoCamera />
                    <input type="file" accept="image/*" style={{ display: 'none' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        </Box>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Profile Information
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='profile'>
        <TextField id="outlined-basic" label="Teacher ID" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>


        <div className="header" style={{marginBottom: "0.8rem"}}>
            Personal Details
        </div>
        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='name'>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='email'>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='phone'>
        <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='qualifications'>
        <TextField id="outlined-basic" label="Qualifications" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='password'>
        <TextField id="outlined-basic" label="Password" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Location Information
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='address'>
        <TextField id="outlined-basic" label="Address" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='city'>
        <TextField id="outlined-basic" label="City" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='state'>
        <TextField id="outlined-basic" label="State" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='pin'>
        <TextField id="outlined-basic" label="Pin" variant="outlined" type='number' sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Teaching Subject Information
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='subject'>
        <TextField id="outlined-basic" label="Subject name" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>
        <div style={{display: 'flex', background: "blue", width: '5rem', borderRadius: "30px"}}>
        <Button sx={{color: "white"}}>
          Submit
        </Button>
        </div>
    </div>
  )
}

export default TeacherRegistration