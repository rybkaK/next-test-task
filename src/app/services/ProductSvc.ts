import { IProduct } from "@/app/models/product";
import { fetchFromBaseUrl } from "@/app/util";

class ProductSvc {
  async getAll(): Promise<IProduct[]> {
    return fetchFromBaseUrl<IProduct[]>("/products");
  }

  async getProductById(id: string): Promise<IProduct> {
    return fetchFromBaseUrl<IProduct>(`/products/${id}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductSvc();