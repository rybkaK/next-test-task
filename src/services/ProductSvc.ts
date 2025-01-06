import { IProduct } from "@/models/product";
import { fetchFromBaseUrl } from "@/util";

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