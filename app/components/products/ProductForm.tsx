import {
  Box, Button, Paper, Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '~/components/forms/TextField';

const defaultInputProps = {
  fullWidth: true,
};

const ProductForm = () => {
  const { control } = useForm();

  return (
    <Paper elevation={8} sx={{ p: 2 }}>
      <form>
        <Typography variant="h6" sx={{ mb: 2 }}>Basic Info</Typography>
        <TextField name="name" label="Name" margin="normal" control={control} {...defaultInputProps} />
        <TextField name="brand" label="Brand" control={control} {...defaultInputProps} />
        <TextField name="price" label="Price" control={control} {...defaultInputProps} />

        <Box display="flex" justifyContent="flex-end">
          <Button size="large" variant="contained">Save</Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ProductForm;
