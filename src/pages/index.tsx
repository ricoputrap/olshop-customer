import ProductCatalogView from '@/components/product-catalog/ProductCatalogView';
import { TProductCatalogItem, TProductsResponse } from '@/components/product-catalog/index.types';
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

interface Props {
  products: TProductCatalogItem[]
}
const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>OLShop - Product Catalog</title>
        <meta name="description" content="OLShop is an online shop / e-commerce." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductCatalogView products={ products } />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const PRODUCTS_URL = "http://localhost:5005/v1/products";

  const response = await fetch(PRODUCTS_URL);
  const products: TProductsResponse = await response.json();

  return {
    props: {
      products: products.data
    }
  }
}

export default Home;