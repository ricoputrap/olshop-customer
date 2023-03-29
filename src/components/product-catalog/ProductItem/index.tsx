import React from 'react'
import { TProductCatalogItem } from '../index.types'
import { Card, Flex, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  data: TProductCatalogItem;
}

const ProductItem: React.FC<Props> = ({ data }) => {
  const price: string = "Rp " + data.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.");

  return (
    <Card
      width="183px"
      height="271px"
      padding="10px"
    >
      <Stack rowGap="8px">
        <Flex justifyContent="center" height="163px">
          <Image
            src={data.image.url as string}
            alt={data.image.label as string}
            objectFit="contain"
          />
        </Flex>
        
        <Stack rowGap="8px">
          <Text fontSize="12px" color="textPrimary" marginTop="0 !important">{data.name}</Text>
          <Text fontSize="18px" color="textPrimary" marginTop="0 !important" fontWeight={700}>{price}</Text>
        </Stack>
      </Stack>
    </Card>
  )
}

export default ProductItem