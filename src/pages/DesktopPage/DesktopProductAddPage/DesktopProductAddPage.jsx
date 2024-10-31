/** @jsxImportSource @emotion/react */
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import useCategories from "../../../hooks/useCategories";
import useInsertProduct from "../../../hooks/useInsertProduct";
import MenuAdd from "../../../components/MenuAdd/MenuAdd";

function DesktopProductAddPage() {
  const categories = useCategories();
  const { insertProduct } = useInsertProduct();

  return (
    <AdminPageLayout>
      <h1>새 상품 추가</h1>
	  
      <MenuAdd categories={categories} onAddProduct={insertProduct} />
    </AdminPageLayout>
  );
}

export default DesktopProductAddPage;
