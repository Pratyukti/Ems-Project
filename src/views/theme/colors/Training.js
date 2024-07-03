import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Fab, Box
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

const Training = () => {
  const [rows, setRows] = useState([{ empCode: '', empName: '', error: false }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;

    // Check for duplicates
    if (name === 'empCode') {
      const isDuplicate = updatedRows.some((row, i) => row.empCode === value && i !== index);
      updatedRows[index].error = isDuplicate;
    }

    // If user enters 'Others' in empCode, clear empName
    if (name === 'empCode' && value.toLowerCase() === 'others') {
      updatedRows[index]['empCode'] = 'Others';
      updatedRows[index]['empName'] = ''; // Clear empName if 'Others' is entered
      updatedRows[index].error = false; // Clear any error if 'Others' is entered
    } else if (name === 'empCode' && !updatedRows[index].error) {
      const empCode = value;
      // Simulate fetching empName based on empCode (replace with actual logic)
      const empName = getEmployeeName(empCode);
      updatedRows[index]['empName'] = empName;
    }

    setRows(updatedRows);
  };

  const getEmployeeName = (empCode) => {
    // Replace with your actual data fetching logic
    const employeeDatabase = {
      '001': 'John Doe',
      '002': 'Jane Smith',
      // Add more mappings as needed
    };

    return employeeDatabase[empCode] || ''; // Return empty string if empCode not found
  };

  const handleAddRow = () => {
    setRows([...rows, { empCode: '', empName: '', error: false }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',  
      }}
    >
      <TableContainer component={Paper} sx={{ border: '1px solid lightgrey', 
        borderRadius: '8px', 
        boxShadow:'none'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No</TableCell>
              <TableCell>Employee Code</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="empCode"
                    value={row.empCode}
                    onChange={(event) => handleInputChange(index, event)}
                    fullWidth
                    error={row.error}
                    helperText={row.error ? 'Duplicate emp code' : ''}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="empName"
                    value={row.empName}
                    onChange={(event) => handleInputChange(index, event)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleAddRow}
        size="small"
        sx={{ 
          position: 'absolute', 
          bottom: -18, 
          left: '49%', 
          transform: 'translateX(-50%)', 
          boxShadow: 'none', 
          zIndex:1
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Training;
