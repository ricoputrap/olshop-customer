import React from 'react'
import { Container } from './index.styles'
import { TProductCatalogItem } from '../index.types'
import { Flex } from '@chakra-ui/react';
import ProductItem from '../ProductItem';

interface Props {
  products: TProductCatalogItem[];
}

const ProductCatalogView: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Flex gap="20px">
        {products.map(item => (
          <ProductItem key={ item.id } data={ item } />
        ))}
      </Flex>
    </Container>
  )
}

export default ProductCatalogView