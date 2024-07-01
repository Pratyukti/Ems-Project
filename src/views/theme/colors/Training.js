import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Button, Box
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
// import './Training.css';

const Training = () => {
  const [rows, setRows] = useState([{ empCode: '', empName: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;

    // If user enters 'Others' in empCode, clear empName
    if (name === 'empCode' && value.toLowerCase() === 'others') {
      updatedRows[index]['empCode'] = 'Others';
      updatedRows[index]['empName'] = ''; // Clear empName if 'Others' is entered
    } else if (name === 'empCode') {
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
    setRows([...rows, { empCode: '', empName: '' }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <Box >
      <TableContainer component={Paper}>
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
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddRow}
        sx={{ marginTop: 2 }}
      >
       <AddIcon/>
      </Button>
    </Box>
  );
};

export default Training;
