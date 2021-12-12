import { Box, Container } from '@mui/material';
import React from 'react';
import Content from '~/components/content';
import Header from '~/components/header';
import ProductForm from '~/components/products/ProductForm';

const ProductCreateRoute = () => (
  <>
    <Header title="Add Product">
      <Box flexGrow={1} />
    </Header>
    <Content>
      <Container maxWidth="md">
        <ProductForm />
      </Container>
    </Content>
  </>
);

export default ProductCreateRoute;
