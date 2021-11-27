import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextFieldProps } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';
import { UseControllerProps } from 'react-hook-form';
import { SxProps } from '@mui/system';

type Props = { width: number, styles: SxProps } & TextFieldProps & UseControllerProps & typeof defaultProps;
const defaultProps = {
  width: 400,
  placeholder: 'Search',
};

const SearchField = ({ placeholder, width, styles }: Props) => (
  <Paper
    component="form"
    elevation={0}
    sx={{
      p: '2px 4px', display: 'flex', alignItems: 'center', width, bgcolor: 'grey.200', ...styles,
    }}
  >
    <IconButton type="submit" sx={{ p: 1.5 }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder={placeholder}
      inputProps={{ 'aria-label': placeholder }}
    />

  </Paper>
);

export default SearchField;
