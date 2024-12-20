/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCategories from "../../../../hooks/useCategories";
import * as s from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

function MobileSideBar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const categories = useCategories();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
        setActiveDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      {isOpen && <div css={s.overlay} onClick={toggleSidebar} />}
      <div ref={sidebarRef} css={[s.layout, isOpen ? s.open : s.closed]}>
        <button css={s.closeButton} onClick={toggleSidebar}>
          <IoIosArrowBack size={30} />
        </button>
        <div>
          <ul css={s.menuList}>
            <li css={s.menuItem}>
              <div css={s.link} onClick={() => toggleDropdown("categories")}>
                <span>Product</span>
                <FaAngleDown size={25} />
              </div>
              {activeDropdown === "categories" && (
                <ul css={s.dropdown}>
                  {categories.map((category) => (
                    <li key={category.value} css={s.dropdownItem}>
                      <Link
                        to={`/admin/category/${category.value}`}
                        css={s.dropLink}
                        onClick={() => {
                          toggleSidebar(); 
                          setActiveDropdown(null); 
                        }}
                      >
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li css={s.menuItem}>
              <div css={s.link} onClick={() => toggleDropdown("productAdd")}>
                <span>상품 등록</span>
                <FaAngleDown size={25} />
              </div>
              {activeDropdown === "productAdd" && (
                <ul css={s.dropdown}>
                  <li css={s.dropdownItem}>
                    <Link
                      to="/admin/product/add"
                      css={[s.dropLink]}
                      onClick={() => setActiveDropdown(null)}
                    >
                      상품 등록
                    </Link>
                  </li>
                  <li css={s.dropdownItem}>
                    <Link
                      to="/admin/product/add/example"
                      css={[s.dropLink]}
                      onClick={() => setActiveDropdown(null)}
                    >
                      예시 등록
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li css={s.menuItem}>
              <div css={s.link} onClick={() => toggleDropdown("productManage")}>
                <span>Product Management</span>
                <FaAngleDown size={25} />
              </div>
              {activeDropdown === "productManage" && (
                <ul css={s.dropdown}>
                  <li css={s.dropdownItem}>
                    <Link
                      to="/admin/product"
                      css={[s.dropLink]}
                      onClick={() => setActiveDropdown(null)}
                    >
                      상품 목록
                    </Link>
                  </li>
                  <li css={s.dropdownItem}>
                    <Link
                      to="/admin/product/edit"
                      css={[s.dropLink]}
                      onClick={() => setActiveDropdown(null)}
                    >
                      상품 수정
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileSideBar;
