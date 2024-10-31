/** @jsxImportSource @emotion/react */
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
      // 필수 필드가 비어 있는지 확인
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

      // 모든 필드가 채워졌다면, 등록 데이터 생성 및 API 호출
      const params = {
        categoryId,
        categoryName,
        productName,
        productPrice,
        productImg,
        costPrice,
        productCount,
      };
      console.log("등록 전 데이터 확인:", params);

      await registerProduct(params);
      alert("메뉴 추가가 완료되었습니다.");
      window.location.reload();
    } catch (error) {
      console.error("상품 추가 실패:", error);
    }
  };

  return { insertProduct };
}

export default useInsertProduct;
