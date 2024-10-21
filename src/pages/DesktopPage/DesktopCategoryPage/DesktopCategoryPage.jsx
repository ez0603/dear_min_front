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
        <h2>Products in Category {categoryId}</h2>
        <div css={s.container}>
          {products.length === 0 ? (
            <p>No products found for this category.</p>
          ) : (
            products.map((product) => (
              <div key={product.id}>
                <h1>{product.productName}</h1>
                <h2>{product.productPrice}</h2>
                <h3>{product.costPrice}</h3>
                <h3>{product.productCount}</h3>
                <img src={product.productImg} alt={product.productName} />
              </div>
            ))
          )}
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default DesktopCategoryPage;
