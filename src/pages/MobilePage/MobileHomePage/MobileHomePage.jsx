/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import useCategories from "../../../hooks/useCategories";

function MobileHomePage(props) {
  const categories = useCategories();

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.categoryLayout}>
            {categories.map((category) => (
              <div key={category.value} css={s.categoryContainer}>
                <p>{category.label}</p>
                <img src={category.img} alt="CategoryImg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default MobileHomePage;
