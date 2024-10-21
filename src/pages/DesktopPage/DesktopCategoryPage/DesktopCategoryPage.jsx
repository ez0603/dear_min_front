/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams } from "react-router-dom";
import useGetProducts from "../../../hooks/useGetProduct";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";

function DesktopCategoryPage(props) {
  const { categoryId } = useParams();
  const { products } = useGetProducts(categoryId);

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          {products.length === 0 ? (
            <p>No products found for this category.</p>
          ) : (
            <div css={s.productLayout}>
              <div css={s.productContain}>
                {products.map((product) => (
                  <div key={product.id} css={s.productCard}>
                    <img src={product.productImg} alt={product.productName} />
                    <h1>{product.productName}</h1>
                    <h2>{product.productPrice}</h2>
                    <h3>{product.costPrice}</h3>
                    <h3>{product.productCount}</h3>
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
