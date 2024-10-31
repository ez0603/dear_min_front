/** @jsxImportSource @emotion/react */
import { useNavigate, useLocation } from "react-router-dom";
import useCategories from "../../../../hooks/useCategories";
import useOptionTitles from "../../../../hooks/useOptionTitles";
import * as s from "./style";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import logo from "../../../../assets/img/desk_logo.png";

function DesktopHeader({ toggleSidebar }) {
  const categories = useCategories();
  const optionTitles = useOptionTitles();
  const navigate = useNavigate();
  const location = useLocation();
  const categoryListRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isOptionPage = location.pathname.startsWith("/admin/option");

  const handleItemClick = (id) => {
    const targetPath = isOptionPage ? `/admin/option/${id}` : `/admin/category/${id}`;
    navigate(targetPath);
  };

  const handleLogoClick = () => {
    navigate("/admin/home");
  };

  const scrollSmooth = (element, distance, duration) => {
    const start = element.scrollLeft;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      element.scrollLeft = start + distance * progressRatio;

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollLeft = () => {
    if (categoryListRef.current) {
      scrollSmooth(categoryListRef.current, -200, 300);
    }
  };

  const scrollRight = () => {
    if (categoryListRef.current) {
      scrollSmooth(categoryListRef.current, 200, 300);
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
  }, [categories, optionTitles]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={s.layout(isScrolled)}>
      <div css={s.topLayout}>
        <button onClick={toggleSidebar} css={s.menuButton(isScrolled)}>
          <IoMenu size={35} />
        </button>
        <div css={s.logoLayout(isScrolled)} onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div css={s.categoryLayout(isScrolled)}>
        <div css={s.categoryContain(isScrolled)}>
          {showArrows && (
            <button css={[s.arrowButton, s.left]} onClick={scrollLeft}>
              <IoIosArrowBack size={24} />
            </button>
          )}
          <div css={s.category} ref={categoryListRef}>
            <ul css={s.list}>
              {(isOptionPage ? optionTitles : categories).map((item) => (
                <li
                  key={item.value}
                  css={s.listItem}
                  onClick={() => handleItemClick(item.value)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          {showArrows && (
            <button css={[s.arrowButton, s.right]} onClick={scrollRight}>
              <IoIosArrowForward size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
