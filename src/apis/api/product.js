import instance from "../utils/instance";

export const getProductRequest = async () => {
  return await instance.get("/product/products");
};

export const registerProduct = async (data) => {
  console.log(data);
  return await instance.post("/product/products", data);
};

export const getProductDetailRequest = async (productId) => {
  return await instance.get(`/product/detail?productId=${productId}`);
};

export const getProductCategoryRequest = async (categoryId) => {
  return await instance.get(
    `/product/products/category?categoryId=${categoryId}`
  );
};

export const updateProduct = async (data) => {
  return await instance.put("/product/products", data);
};
