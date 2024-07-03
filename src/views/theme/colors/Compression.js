import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import imageCompression from 'browser-image-compression';

const Compression = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(file, options);
        setSelectedFile(file);
        setCompressedFile(compressedFile);
      } catch (error) {
        setError('Error compressing the image');
        console.error(error);
      }
    }
  };

  const handleUpload = () => {
    if (compressedFile) {
      // Implement your upload logic here
      console.log('Compressed file ready for upload:', compressedFile);
    }
  };

  return (
    <Box  sx={{ padding: 4, border: '1px solid lightgrey', borderRadius: '8px', maxWidth: '400px',margin:'auto'  }} >
      <Typography variant="h6" gutterBottom>
        Upload  Image
      </Typography>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-button-file">
        <Button variant="contained" component="span" sx={{marginRight:1}} >
          Select Image
        </Button>
      </label>
      {selectedFile && (
        <Typography variant="body2" gutterBottom>
          Original file: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
        </Typography>
      )}
      {compressedFile && (
        <Typography variant="body2" gutterBottom>
          Compressed file: {compressedFile.name} ({(compressedFile.size / 1024 / 1024).toFixed(2)} MB)
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!compressedFile}
        // sx={{ marginTop: 2 }}
      >
        Upload Image
      </Button>
    </Box>
  );
};

export default Compression;
