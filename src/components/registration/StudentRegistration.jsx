import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Checkbox from '@mui/material/Checkbox';
import "./TeacherRegistration.scss"
import { Button } from '@mui/material';

export default function StudentRegistration() {
    const subjects = ['Mathematics', 'Science', 'Chemistry', 'Biology'];

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
        <TextField id="outlined-basic" label="Student ID" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>


        <div className="header" style={{marginBottom: "0.8rem"}}>
            Personal Details
        </div>
        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='name'>
        <TextField id="outlined-basic" label="Name" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='pname'>
        <TextField id="outlined-basic" label="Parents Name" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='email'>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='age'>
        <TextField id="outlined-basic" label="Age" type='number' variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='phone'>
        <TextField id="outlined-basic" label="Phone" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='aphone'>
        <TextField id="outlined-basic" label="Alternate Phone" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
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
            Education Details
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='college'>
        <TextField id="outlined-basic" label="College/School Name" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='class'>
        <TextField id="outlined-basic" label="Class" type='number' variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='cgpa'>
        <TextField id="outlined-basic" label="CGPA/Percentage" type='number' variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        </Box>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Subjects
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column', marginBottom:"2rem"}} >
        <div className='college'>
        {subjects.map((subject, index) => (
          <div key={index} className='subject'>
            <FormControlLabel
              control={<Checkbox />}
              label={subject}
            />
          </div>
        ))}
        </div>
        </Box>

        <div className="header" style={{marginBottom: "0.8rem"}}>
            Requirements
        </div>

        <Box className="detail" style={{display: 'flex', maxWidth: "30rem", flexDirection:'column'}} >
        <div className='classrequired'>
        <TextField id="outlined-basic" label="Class Required" variant="outlined" sx={{marginBottom:"2rem", width:'100%'}}/>
        </div>
        <div className='additionalnote'>
        <TextField id="outlined-basic" label="Additional Note" variant="outlined" sx={{marginBottom:"2rem", width:'100%', }}/>
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
