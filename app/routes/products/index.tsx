import { AddOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import {
  DataGrid, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport,
} from '@mui/x-data-grid';
import { Link } from 'remix';
import Content from '~/components/content';
import Header from '~/components/header';
import SearchField from '~/components/search-field';

const propTypes = {};
const defaultProps = {};

const columns = [
  {
    field: 'id', headerName: 'ID', width: 70, sortable: false,
  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: any) => `${params.getValue(params.id, 'firstName') || ''} ${
      params.getValue(params.id, 'lastName') || ''
    }`,
  },
];

const rows = [
  {
    id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,
  },
  {
    id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,
  },
  {
    id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,
  },
  {
    id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,
  },
  {
    id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,
  },
  {
    id: 6, lastName: 'Melisandre', firstName: null, age: 150,
  },
  {
    id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,
  },
  {
    id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,
  },
  {
    id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,
  },
];

const CustomToolbar = () => (
  <GridToolbarContainer>
    <Box flexGrow={1} />
    <GridToolbarDensitySelector />
    <GridToolbarExport />
  </GridToolbarContainer>
);

const Products = () => (
  <>
    <Header title="Product">
      <>
        <Box flexGrow={1} />

        <Button variant="contained" component={Link} to="new" startIcon={<AddOutlined />}>Create Product</Button>
      </>
    </Header>

    <Content>

      <Paper elevation={10} sx={{ py: 3, px: 2 }}>
        <SearchField placeholder="Search Products" width="100%" />

        <Box height={800} mt={2}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={80}
            rowsPerPageOptions={[5]}
            disableColumnMenu
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </Box>
      </Paper>

    </Content>
  </>
);

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
