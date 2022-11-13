export interface Product {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface ProductsRsponse {
  data: Product[];
  limit: number;
  totalCount: number;
}
