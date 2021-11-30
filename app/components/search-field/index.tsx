import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { SxProps } from '@mui/system';

interface Props { width?: string | number, placeholder?: string, styles?: SxProps, }

const defaultProps = {
  width: 400,
  placeholder: 'Search',
  styles: {},
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

SearchField.defaultProps = defaultProps;

export default SearchField;
