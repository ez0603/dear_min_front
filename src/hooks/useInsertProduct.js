import { registerProduct } from "../apis/api/product";

function useInsertProduct() {
  const insertProduct = async (
    productName,
    productPrice,
    costPrice,
    productImg,
    productCount,
    categoryId,
    categoryName
  ) => {
    try {
      if (!productName) {
        alert("상품명을 입력해주세요.");
        return;
      }
      if (!productPrice) {
        alert("가격을 입력해주세요.");
        return;
      }
      if (!costPrice) {
        alert("단가를 입력해주세요.");
        return;
      }
      if (!productImg) {
        alert("이미지를 업로드해주세요.");
        return;
      }
      if (!productCount) {
        alert("수량을 입력해주세요.");
        return;
      }
      if (!categoryId || categoryId === 0) {
        alert("카테고리를 선택해주세요.");
        return;
      }

      const params = {
        categoryId,
        categoryName,
        productName,
        productPrice,
        productImg,
        costPrice,
        productCount,
      };

      const response = await registerProduct(params);
      const productId = response.data.productId;
      alert("메뉴 추가가 완료되었습니다.");
      return productId;
    } catch (error) {
      console.error("상품 추가 실패:", error);
      throw error;
    }
  };

  return { insertProduct };
}

export default useInsertProduct;
