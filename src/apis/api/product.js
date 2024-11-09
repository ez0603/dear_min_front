import instance from "../utils/instance";

export const getProductRequest = async () => {
  return await instance.get("/product/products");
};

export const registerProduct = async (data) => {
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

export const deleteProduct = async (productId) => {
  return await instance.delete(`/product/products?productId=${productId}`);
};

export const searchAllOptionTitleRequest = async () => {
  return await instance.get("/product/option/titles");
};

export const searchOptionRequest = async (optionTitleId) => {
  return await instance.get(`/product/option?optionTitleId=${optionTitleId}`);
};

export const registerProductMaterial = async (data) => {
  return await instance.post("/product/material", data);
};

export const updateProductMaterial = async (productId, data) => {
  return await instance.put(`/product/material?productId=${productId}`, data);
};
