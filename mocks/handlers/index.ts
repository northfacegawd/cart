import coupons from '@mocks/handlers/coupons';
import products from '@mocks/handlers/products';

export const handlers = [...Object.values(products), ...Object.values(coupons)];
