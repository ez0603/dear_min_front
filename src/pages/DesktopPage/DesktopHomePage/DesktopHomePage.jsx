/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import background from "../../../assets/img/background2.jpg";

function DesktopHomePage(props) {

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.background}>
            <img src={background} alt="background" />
          </div>
          <div css={s.test}>fsdfsdfsdfsd</div>
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default DesktopHomePage;
