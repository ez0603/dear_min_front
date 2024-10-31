/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import useCategories from "../../../hooks/useCategories";
import useInsertProduct from "../../../hooks/useInsertProduct";
import MenuAdd from "../../../components/MenuAdd/MenuAdd";
import useOptionTitles from "../../../hooks/useOptionTitles";

function DesktopProductAddPage() {
  const categories = useCategories();
  const optionTitles = useOptionTitles();
  const { insertProduct } = useInsertProduct();

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <h1>새 상품 추가</h1>

        <MenuAdd
          categories={categories}
          optionTitles={optionTitles}
          onAddProduct={insertProduct}
        />
      </div>
    </AdminPageLayout>
  );
}

export default DesktopProductAddPage;
