/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams, useNavigate } from "react-router-dom";
import useGetProducts from "../../../hooks/useGetProduct";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";

function DesktopCategoryPage(props) {
  const { categoryId } = useParams();
  const { products } = useGetProducts(categoryId);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/admin/product/${productId}`); 
  };

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          {products.length === 0 ? (
            <p>상품이 존재하지 않습니다.</p>
          ) : (
            <div css={s.productLayout}>
              <div css={s.productContain}>
                {products.map((product) => (
                  <div key={product.productId} css={s.productCard}>
                    <div
                      css={s.imageContainer}
                      onClick={() => handleProductClick(product.productId)} 
                    >
                      <img src={product.productImg} alt={product.productName} />
                      <p>수정하기</p>
                    </div>
                    <h1>{product.productName}</h1>
                    <h2>{product.productPrice} 원</h2>
                    <h3>단가 {product.costPrice} 원</h3>
                    <h2>{product.productCount} 개</h2>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default DesktopCategoryPage;
