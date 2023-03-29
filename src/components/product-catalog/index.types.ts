export type TProductCatalogItem = {
  id: string;
  name: string;
  price: number;
  image: {
    label: string;
    url: string;
  }
}

export type TProductsResponse = {
  data: TProductCatalogItem[];
}