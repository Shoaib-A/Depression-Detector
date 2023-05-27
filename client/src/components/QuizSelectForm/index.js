import { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const QuizSelectForm = (props) => {
  const [state, setState] = useState({
    depression: false,
    anxiety: false,
    ptsd: false,
    sch: false,
    addiction: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.replace(
      `/quiz/depression=${state.depression}&anxiety=${state.anxiety}&ptsd=${state.ptsd}&sch=${state.sch}&addiction=${state.addiction}`
    );
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          marginTop: '150px',
          marginBottom: '250px',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <FormControl required component="fieldset" variant="standard">
          <FormLabel component="legend" sx={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Pick one or more
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.depression}
                  onChange={handleChange}
                  name="depression"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label="Depression"
              sx={{ fontSize: '1.2rem' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.anxiety}
                  onChange={handleChange}
                  name="anxiety"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label="Anxiety"
              sx={{ fontSize: '1.2rem' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.ptsd}
                  onChange={handleChange}
                  name="ptsd"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label="PTSD"
              sx={{ fontSize: '1.2rem' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.sch}
                  onChange={handleChange}
                  name="sch"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label="Schizophrenia"
              sx={{ fontSize: '1.2rem' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.addiction}
                  onChange={handleChange}
                  name="addiction"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
              }
              label="Addiction"
              sx={{ fontSize: '1.2rem' }}
            />
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: '20px', width: '100%', fontSize: '1.3rem' }}
            onClick={handleSubmit}
            disabled={!state.depression && !state.anxiety && !state.ptsd && !state.sch && !state.addiction}
          >
            Start Quiz
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default QuizSelectForm;
