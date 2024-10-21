import { useParams } from "react-router-dom";
import useGetProducts from "../../../hooks/useGetProduct";

function MobileCategoryPage(props) {
  const { categoryId } = useParams();
  
  // 1. 기본 확인
  console.log("MobileCategoryPage Rendered");
  console.log("categoryId from useParams:", categoryId); // 카테고리 ID가 제대로 나오는지 확인

  const { products, error } = useGetProducts(categoryId);

  // 2. 제품 목록 및 오류 상태 확인
  console.log("Fetched products:", products); // 가져온 제품 로그 출력
  console.log("Error (if any):", error); // 에러가 발생했을 경우 로그 출력

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div>
      <h2>Products in Category {categoryId}</h2>
      <div>
        {products.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MobileCategoryPage;
