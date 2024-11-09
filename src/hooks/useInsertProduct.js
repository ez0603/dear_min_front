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
      const missingFields = [];
      if (!productName) missingFields.push("상품명");
      if (!productPrice) missingFields.push("가격");
      if (!costPrice) missingFields.push("단가");
      if (!productImg) missingFields.push("이미지");
      if (!productCount) missingFields.push("수량");
      if (!categoryId || categoryId === 0) missingFields.push("카테고리");

      if (missingFields.length > 0) {
        alert(`입력되지 않은 필드: ${missingFields.join(", ")}`);
        return false;
      }

      if (isNaN(Number(productPrice))) {
        alert("가격에는 숫자만 입력해주세요.");
        return false;
      }
      
      if (isNaN(Number(productCount))) {
        alert("수량에는 숫자만 입력해주세요.");
        return false;
      }

      const params = {
        categoryId,
        categoryName,
        productName,
        productPrice: parseInt(productPrice, 10),
        productImg,
        costPrice,
        productCount: parseInt(productCount, 10),
      };

      const response = await registerProduct(params);
      const productId = response.data.productId;
      alert("상품 추가가 완료되었습니다.");
      return productId;
    } catch (error) {
      console.error("상품 추가 실패:", error);
      alert("상품 추가에 실패했습니다. 오류: " + error.message);
      return false;
    }
  };

  return { insertProduct };
}

export default useInsertProduct;
