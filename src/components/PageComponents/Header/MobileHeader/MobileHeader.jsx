/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import useCategories from "../../../../hooks/useCategories";
import * as s from "./style";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

function MobileHeader({ toggleSidebar }) {
  const categories = useCategories();
  const navigate = useNavigate();
  const categoryListRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  const handleCategoryClick = (categoryId) => {
    navigate(`/home?category=${categoryId}`);
  };

  const scrollLeft = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (categoryListRef.current) {
      categoryListRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (categoryListRef.current) {
        const { scrollWidth, clientWidth } = categoryListRef.current;
        setShowArrows(scrollWidth > clientWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [categories]);

  return (
    <div css={s.layout}>
      <button onClick={toggleSidebar} css={s.menuButton}>
        <IoMenu size={35} />
      </button>
      <div css={s.categoryLayout}>
        {showArrows && (
          <button
            css={[s.arrowButton, s.left]} // 배열 형태로 전달
            onClick={scrollLeft}
          >
            <IoIosArrowBack size={24} />
          </button>
        )}
        <div css={s.category} ref={categoryListRef}>
          <ul css={s.list}>
            {categories.map((category) => (
              <li
                key={category.value}
                css={s.listItem}
                onClick={() => handleCategoryClick(category.value)}
              >
                {category.label}
              </li>
            ))}
          </ul>
        </div>
        {showArrows && (
          <button
            css={[s.arrowButton, s.right]} // 배열 형태로 전달
            onClick={scrollRight}
          >
            <IoIosArrowForward size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default MobileHeader;
