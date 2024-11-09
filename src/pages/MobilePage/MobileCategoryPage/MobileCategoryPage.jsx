/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5"; // 아이콘 추가
import useGetProducts from "../../../hooks/useGetProduct";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import useCategories from "../../../hooks/useCategories";

function MobileCategoryPage(props) {
  const { categoryId } = useParams();
  const { products } = useGetProducts(categoryId);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false); // 스크롤 버튼 표시 여부
  const searchRef = useRef(null);
  const categories = useCategories();

  const currentCategory = categories.find(
    (category) => category.value === Number(categoryId)
  );

  const handleProductClick = (productId) => {
    navigate(`/admin/product/${productId}`);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSearchInput = () => {
    setShowSearch(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
      setSearchTerm("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        <div css={s.container}>
          <h2 css={s.categoryTitle}>
            {currentCategory ? currentCategory.label : "카테고리 없음"}
          </h2>
          <div css={s.searchContainer}>
            {!showSearch && (
              <FaSearch onClick={toggleSearchInput} css={s.searchIcon} />
            )}
            <input
              type="text"
              placeholder="상품 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              css={showSearch ? s.searchInputOpen : s.searchInputClosed}
              autoFocus={showSearch}
              ref={searchRef}
            />
          </div>
          {filteredProducts.length === 0 ? (
            <p>상품이 존재하지 않습니다.</p>
          ) : (
            <div css={s.productLayout}>
              <div css={s.productContain}>
                {filteredProducts.map((product) => (
                  <div key={product.productId} css={s.productCard}>
                    <div
                      css={s.imageContainer}
                      onClick={() => handleProductClick(product.productId)}
                    >
                      <img src={product.productImg} alt={product.productName} />
                    </div>
                    <div css={s.textBox}>
                      <h1>{product.productName}</h1>
                      <h2>{product.productPrice} 원</h2>
                      <h3>단가 {product.costPrice} 원</h3>
                      <h2>남은 수량 {product.productCount} 개</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showScrollButton && (
            <IoArrowUpCircleSharp
              css={s.scrollTopButton}
              onClick={scrollToTop}
            />
          )}
        </div>
      </div>
    </AdminPageLayout>
  );
}

export default MobileCategoryPage;
