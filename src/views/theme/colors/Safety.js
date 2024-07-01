import React from 'react';
import Training from './Training';
// import '../theme/colors/Safety.css';
import {
  Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormControl, Card, CardContent, Divider, Grid
} from '@mui/material';

const Safety = () => {
  return (
    <Box className="section" sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
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
            <Typography variant="h6">Trainer:</Typography>
            <Training />
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6">Employee:</Typography>
            <Training />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Safety;
