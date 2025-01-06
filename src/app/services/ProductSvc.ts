import { IProduct } from "@/app/models/product";
import { fetchFromBaseUrl } from "@/app/util";

class ProductSvc {
  async getAll(name?: string): Promise<IProduct[]> {
    return fetchFromBaseUrl<IProduct[]>(`/products`).then((res) => {
      if(name) {
        return res.filter(
          (item) =>
            name && item.name?.toLocaleLowerCase().includes(name.toLowerCase())
        );

      } 
      return res;
  });
  }

  async getProductById(id: string): Promise<IProduct> {
    return fetchFromBaseUrl<IProduct>(`/products/${id}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductSvc();