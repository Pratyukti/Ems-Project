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
  Typography,
  Box,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import Training from '../theme/colors/Training';
import Compression from '../theme/colors/Compression';

const Accident = () => {
  const [reportType, setReportType] = useState('');
  const [toolBoxTalk, setToolBoxTalk] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleToolBoxTalkChange = (event) => {
    setToolBoxTalk(event.target.value);
  };
  
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  return (
    <Container>
      <Box className="section" sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
        <Card sx={{ width: '100%', maxWidth: 800, padding: 3, boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2}>
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
                  max={today} // Setting max attribute to disable future dates
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Reference Number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Divider sx={{ marginY: 3 }} />
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Incident Type</FormLabel>
              <RadioGroup row value={reportType} onChange={handleReportTypeChange}>
                <FormControlLabel value="accident" control={<Radio />} label="Accident" />
                <FormControlLabel value="nearMiss" control={<Radio />} label="Near Miss" />
              </RadioGroup>
            </FormControl>

            {reportType && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography gutterBottom>Reported By:</Typography>
                  <Training />
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>Workmen Involved:</Typography>
                  <Training />
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom>Supervisor:</Typography>
                  <Training />
                </Grid>

                {reportType === 'accident' && (
                  <>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Severity</FormLabel>
                        <RadioGroup row>
                          <FormControlLabel value="1" control={<Radio />} label="1" />
                          <FormControlLabel value="2" control={<Radio />} label="2" />
                          <FormControlLabel value="3" control={<Radio />} label="3" />
                          <FormControlLabel value="4" control={<Radio />} label="4" />
                          <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Permit Status</FormLabel>
                        <RadioGroup row>
                          <FormControlLabel value="valid" control={<Radio />} label="Valid" />
                          <FormControlLabel value="notRequired" control={<Radio />} label="Not Required" />
                          <FormControlLabel value="noPermit" control={<Radio />} label="No Permit" />
                          <FormControlLabel value="expired" control={<Radio />} label="Expired" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">PPE Status</FormLabel>
                        <RadioGroup row>
                          <FormControlLabel value="ok" control={<Radio />} label="OK" />
                          <FormControlLabel value="faulty" control={<Radio />} label="Faulty" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Tool Box Talk</FormLabel>
                        <RadioGroup row value={toolBoxTalk} onChange={handleToolBoxTalkChange}>
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    {toolBoxTalk === 'yes' && (
                      <Grid item xs={12}>
                        <TextField
                          label="Reference Number (Optional)"
                          fullWidth
                        />
                      </Grid>
                    )}
                  </>
                )}

                <Grid item xs={12}>
                  <TextField
                    label="Report"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Compression />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary">Submit</Button>
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Accident;
