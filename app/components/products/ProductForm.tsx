import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField as MuiTextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActionFunction, redirect, useSubmit } from 'remix';
import { useDropzone } from 'react-dropzone';
import { Delete } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import TextField from '~/components/forms/TextField';
import Switch from '~/components/forms/Switch';
import schema from '~/components/products/schema';

// Note the "action" export name, this will handle our form POST
export const action: ActionFunction = async ({ request }):Promise<Response> => {
  const formData = await request.formData();

  console.log('formData: ', formData);

  // const project = await createProject(formData);
  return redirect('/products/new');
};

const ProductForm = () => {
  const method = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      brand: '',
      price: '',
    },
  });
  const submit = useSubmit();

  const [files, setFiles] :any = useState([]);

  const onSubmit = (data: any) => {
    submit(data, { method: 'post' });
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));

      setFiles(newFiles);
    },
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file:any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <form method="post" onSubmit={method.handleSubmit(onSubmit)}>
      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>

        <Typography variant="h6">General Information</Typography>
        <Divider sx={{ my: 2 }} />
        <Controller
          name="name"
          control={method.control}
          render={(field) => (
            <TextField {...field} fullWidth margin="normal" label="Name" />
          )}
        />
        <Controller
          name="brand"
          control={method.control}
          render={(field) => (
            <TextField {...field} fullWidth margin="normal" label="Brand" />
          )}
        />
        <Controller
          name="price"
          control={method.control}
          render={(field) => (
            <TextField {...field} fullWidth margin="normal" label="Price" />
          )}
        />

        <Paper variant="outlined" {...getRootProps({ sx: { p: 2, my: 2, borderStyle: 'dashed' } })}>
          <input {...getInputProps()} />
          <Typography>Drag or clicked to upload files</Typography>

          <Stack direction="row" spacing={2}>
            {files.map((file:any) => (
              <img
                key={file.name}
                alt={file.name}
                src={file.preview}
                width="100"
              />
            ))}
          </Stack>
        </Paper>

      </Paper>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" sx={{ mr: 2 }}>Variant</Typography>

          <FormControlLabel
            control={<Switch sx={{ m: 1 }} defaultChecked />}
            label="Enable variant"
          />
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box display="flex" alignItems="center">
          <Typography sx={{ mr: 2 }}>Variant 1</Typography>
          <MuiTextField select SelectProps={{ autoWidth: true }} name="variant" value="size" size="small">
            <MenuItem value="size">Size</MenuItem>
            <MenuItem value="color">Color</MenuItem>
          </MuiTextField>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Button variant="outlined" sx={{ my: 3 }}>Add new variant</Button>
        <Divider sx={{ mb: 2 }} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Warna</TableCell>
                <TableCell>Ukuran</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Black</TableCell>
                <TableCell>8</TableCell>
                <TableCell>
                  <MuiTextField size="small" name="variant.black.price" />
                </TableCell>
                <TableCell>
                  <MuiTextField size="small" name="variant.stock.price" />
                </TableCell>
                <TableCell>
                  <MuiTextField size="small" name="variant.black.price" />
                </TableCell>
                <TableCell>
                  <Delete color="error" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
        <Button size="large" type="submit" variant="contained">Save</Button>
      </Box>
    </form>
  );
};

export default ProductForm;
