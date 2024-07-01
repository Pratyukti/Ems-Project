import React, { useState } from 'react';
import { 
  Container, 
  TextField, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Button,
  Grid, 
  Typography
} from '@mui/material';
import  Training from '../theme/colors/Training' 

const Accident = () => {
  const [reportType, setReportType] = useState('');

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  return (
    <Container>
         <Grid container spacing={2}>
           <Grid item xs={12} sm={6} gutterBottom>
             <TextField
              label="Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid  item xs={12} sm={6} gutterBottom>
            <TextField
              label="Reference Number"
              fullWidth
            />
          </Grid>
          </Grid>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Incident Type</FormLabel>
        <RadioGroup row value={reportType} onChange={handleReportTypeChange}>
          <FormControlLabel value="accident" control={<Radio />} label="Accident" />
          <FormControlLabel value="nearMiss" control={<Radio />} label="Near Miss" />
        </RadioGroup>
      </FormControl>

      {reportType && (
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Reference Number"
              fullWidth
            />
          </Grid> */}

          <Grid item xs={12}>
            {/* <TextField
               
              fullWidth
            /> */}
            <Typography gutterBottom> Who Reported: </Typography>
            <Training/>
          </Grid>

          <Grid item xs={12}>
            {/* <TextField
              label="Trainer"
              fullWidth
            /> */}
            <Typography gutterBottom> Trainer: </Typography>
            <Training/>
          </Grid>

          {reportType === 'accident' && (
            <>
              <Grid item xs={12}>
                {/* <TextField
                  label="Work Men Involved"
                  fullWidth
                /> */}
                <Typography gutterBottom> Work Men Involved: </Typography>
                <Training/>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Supervisor"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Severity"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Permission Status</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">PPS Status</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="ok" control={<Radio />} label="OK" />
                    <FormControlLabel value="fault" control={<Radio />} label="Fault" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </>
          )}

          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Accident;