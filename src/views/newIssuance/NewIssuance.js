import React, { useState } from 'react';
import Training from '../theme/colors/Training';
import {
  Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormControl, Card, CardContent, Divider, Grid, Checkbox, Button
} from '@mui/material';
import Compression from '../theme/colors/Compression';

const Safety = () => {
  const [trainingType, setTrainingType] = useState('');
  const [ppeDetails, setPpeDetails] = useState({
    helmet: false,
    shoes: false,
    gloves: false,
  });
  const [toolDetails, setToolDetails] = useState({
    clamp_meter: false,
    plier: false,
    hammer: false,
  });
  const [dressDetails, setDressDetails] = useState({
    dress: false,
    jacket: false,
    reflecting_jacket: false,
    raincoat: false,
  });

  const handleTrainingTypeChange = (event) => {
    setTrainingType(event.target.value);
  };

  const handleDetailsChange = (event) => {
    const { name, checked } = event.target;
    if (trainingType === 'TOOLS') {
      setToolDetails((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (trainingType === 'PPE') {
      setPpeDetails((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (trainingType === 'DRESS') {
      setDressDetails((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
  };

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
              <RadioGroup row value={trainingType} onChange={handleTrainingTypeChange}>
                <FormControlLabel value="TOOLS" control={<Radio />} label="TOOLS" />
                <FormControlLabel value="PPE" control={<Radio />} label="PPE" />
                <FormControlLabel value="DRESS" control={<Radio />} label="DRESS" />
              </RadioGroup>
            </FormControl>
          </Box>
          
          {trainingType === 'TOOLS' && (
            <Box marginBottom={3}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>TOOLS Details:</Typography>
              <FormControl component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={toolDetails.clamp_meter}
                      onChange={handleDetailsChange}
                      name="clamp_meter"
                    />
                  }
                  label="CLAMP METER"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={toolDetails.plier}
                      onChange={handleDetailsChange}
                      name="plier"
                    />
                  }
                  label="Plier"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={toolDetails.hammer}
                      onChange={handleDetailsChange}
                      name="hammer"
                    />
                  }
                  label="Hammer"
                />
              </FormControl>
            </Box>
          )}
          {trainingType === 'PPE' && (
            <Box marginBottom={3}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>PPE Details:</Typography>
              <FormControl component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ppeDetails.helmet}
                      onChange={handleDetailsChange}
                      name="helmet"
                    />
                  }
                  label="Helmet"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ppeDetails.shoes}
                      onChange={handleDetailsChange}
                      name="shoes"
                    />
                  }
                  label="Shoes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ppeDetails.gloves}
                      onChange={handleDetailsChange}
                      name="gloves"
                    />
                  }
                  label="Gloves"
                />
              </FormControl>
            </Box>
          )}
          {trainingType === 'DRESS' && (
            <Box marginBottom={3}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>Dress Details:</Typography>
              <FormControl component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dressDetails.dress}
                      onChange={handleDetailsChange}
                      name="dress"
                    />
                  }
                  label="Dress"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dressDetails.jacket}
                      onChange={handleDetailsChange}
                      name="jacket"
                    />
                  }
                  label="Jacket"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dressDetails.reflecting_jacket}
                      onChange={handleDetailsChange}
                      name="reflecting_jacket"
                    />
                  }
                  label="Reflecting Jacket"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dressDetails.raincoat}
                      onChange={handleDetailsChange}
                      name="raincoat"
                    />
                  }
                  label="Raincoat"
                />
              </FormControl>
            </Box>
          )}
          <Divider sx={{ marginBottom: 3 }} />
          <Box marginBottom={3}>
            <Typography variant="h6">EMPLOYEE DETAILS:</Typography>
            <Training />
          </Box>
          
          {/* <Box>
            <Button variant="contained" color="secondary">ENTER</Button>
          </Box> */}
          <Compression />
          <Box sx={{margin:'auto'}}>
            <Button variant="contained" color="primary">ENTER</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Safety;
