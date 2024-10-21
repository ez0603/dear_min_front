import instance from "../utils/instance";

export const getProductRequest = async () => {
  return await instance.get("/product/products");
};

export const getProductDetailRequest = async () => {
  return await instance.get("/product/detail");
};

export const getProductCategoryRequest = async (categoryId) => {
  return await instance.get(
    `/product/products/category?categoryId=${categoryId}`
  );
};
