import React, { useState } from 'react';
import Training from './Training';
import {
  Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormControl, Card, CardContent, Divider, Grid, Button
} from '@mui/material';
import Compression from './Compression';

const Safety = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <Box className="section" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 800, padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2} marginBottom={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={selectedDate}
                onChange={handleDateChange}
                max={today} // Set max attribute to disable future dates
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Reference Number"
                fullWidth
              />
            </Grid>
          </Grid>
          <Divider sx={{ marginBottom: 3 }} />
          <Box className="section3" marginBottom={3}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>Training Type:</Typography>
            <FormControl component="fieldset">
              <RadioGroup row>
                <FormControlLabel value="Tool box Training" control={<Radio />} label="Tool box Training" />
                <FormControlLabel value="Job & Safety" control={<Radio />} label="Job & Safety" />
                <FormControlLabel value="Behavioral" control={<Radio />} label="Behavioral" />
                <FormControlLabel value="Others" control={<Radio />} label="Others" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider sx={{ marginBottom: 3 }} />
          <Box marginBottom={3}>
            <Typography variant="h6">TRAINER:</Typography>
            <Training />
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6">TRAINEE:</Typography>
            <Training />
          </Box>

          <Compression marginBottom={3} />

          <Box>
            <Button variant="contained" color="primary">Submit</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Safety;
