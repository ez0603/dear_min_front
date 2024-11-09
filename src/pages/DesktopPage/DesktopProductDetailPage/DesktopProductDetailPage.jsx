/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetProductsDetail from "../../../hooks/useGetProductDetail";
import ImageUpload from "../../../components/ProductComponents/ImageUpload/ImageUpload";
import {
  deleteProduct,
  updateProduct,
  updateProductMaterial,
} from "../../../apis/api/product";
import useCategories from "../../../hooks/useCategories";
import CategorySelect from "../../../components/ProductComponents/CategorySelect/CategorySelect";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../apis/firebase/firebaseConfig";
import AdminPageLayout from "../../../components/PageComponents/AdminPageLayout/AdminPageLayout";
import useGetOption from "../../../hooks/useGetOption";
import useOptionTitles from "../../../hooks/useOptionTitles";

function DesktopProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { productDetail, isLoading } = useGetProductsDetail(productId);
  const [imageUrl, setImageUrl] = useState(productDetail?.productImg || "");
  const [localFile, setLocalFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const categories = useCategories();
  const [optionTitleId, setOptionTitleId] = useState(0);
  const [optionNameId, setOptionNameId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const optionTitles = useOptionTitles();
  const { option } = useGetOption(optionTitleId);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
  const [dividedPrice, setDividedPrice] = useState(0);
  const [addedOptions, setAddedOptions] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const [editValues, setEditValues] = useState({
    productName: "",
    productPrice: "",
    costPrice: "",
    productCount: "",
    productImg: "",
  });

  const [selectedCategory, setSelectedCategory] = useState(
    categories.find((cat) => cat.value === productDetail?.categoryId) || null
  );

  const handleEdit = () => {
    setEditValues({
      productName: productDetail.productName,
      productPrice: productDetail.productPrice,
      costPrice: productDetail.costPrice,
      productCount: productDetail.productCount,
      productImg: productDetail.productImg,
    });
    setIsEditing(true);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 이 상품을 삭제하시겠습니까?")) {
      try {
        await deleteProduct(productId);
        alert("상품이 삭제되었습니다.");
        const categoryId = productDetail?.categoryId;
        navigate(`/admin/category/${categoryId}`);
      } catch (error) {
        console.error("상품 삭제 실패", error);
        alert("상품 삭제에 실패했습니다.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setImageUrl(productDetail.productImg);
  };

  const handleSave = async () => {
    let updatedImageUrl = imageUrl;
  
    if (localFile) {
      try {
        const storageRef = ref(storage, `products/${localFile.name}`);
        const uploadResult = await uploadBytes(storageRef, localFile);
        updatedImageUrl = await getDownloadURL(uploadResult.ref);
      } catch (error) {
        console.error("Image upload failed", error);
        alert("Image upload failed");
        return;
      }
    }
  
    const updatedProductData = {
      productId: parseInt(productId),
      productName: editValues.productName || "",
      productPrice: parseInt(editValues.productPrice, 10) || 0,
      costPrice: parseInt(totalCost, 10) || 0,
      productCount: parseInt(editValues.productCount, 10) || 0,
      categoryId: selectedCategory?.value || productDetail.categoryId,
      productImg: updatedImageUrl || "",
    };
  
    const updatedProductMaterialData = {
      ...updatedProductData,
      optionNameIds: addedOptions.map((opt) => opt.optionNameId),
      productQuantities: addedOptions.map((opt) => opt.quantity),
    };
  
    try {
      // `updateProduct` API 호출
      await updateProduct(updatedProductData);
  
      // `updateProductMaterial` API 호출
      await updateProductMaterial(updatedProductMaterialData);
  
      alert("Product and materials updated successfully");
      setIsEditing(false);
    } catch (error) {
      if (error.response) {
        console.error("Error data:", error.response.data); // 서버에서 반환된 오류 메시지
        alert(`Update failed: ${error.response.data.message || "Unknown error"}`);
      } else {
        console.error("Failed to update product or materials", error);
        alert("Failed to update product or materials");
      }
    }
  };

  useEffect(() => {
    if (productDetail) {
      setEditValues({
        productName: productDetail.productName,
        productPrice: productDetail.productPrice,
        costPrice: productDetail.costPrice,
        productCount: productDetail.productCount,
        productImg: productDetail.productImg,
      });
      setImageUrl(productDetail.productImg);
    }
  }, [productDetail]);

  useEffect(() => {
    setEditValues((prevValues) => ({
      ...prevValues,
      costPrice: totalCost,
    }));
  }, [totalCost]);

  const handleImageUpload = (file) => {
    setLocalFile(file);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    if (selectedOptionPrice !== null && newQuantity > 0) {
      setDividedPrice(Math.floor(selectedOptionPrice / newQuantity));
    } else {
      setDividedPrice(0);
    }
  };

  const handleAddOption = () => {
    if (optionNameId !== 0 && selectedOptionPrice !== null) {
      if (!quantity || quantity <= 0) {
        alert("수량을 입력해주세요.");
        return;
      }
      const optionName =
        option.optionNames[option.optionNameIds.indexOf(optionNameId)];

      setAddedOptions((prevOptions) => [
        ...prevOptions,
        {
          optionNameId,
          name: optionName,
          price: selectedOptionPrice,
          quantity,
          dividedPrice,
        },
      ]);

      // Update total cost
      setTotalCost((prevCost) => prevCost + dividedPrice);

      setOptionNameId(0);
      setSelectedOptionPrice(null);
      setQuantity("");
      setDividedPrice(0);
    }
  };

  const handleOptionChange = (selectedId) => {
    setOptionNameId(selectedId);
    const index = option.optionNameIds.indexOf(selectedId);
    if (index !== -1) {
      const price = option.optionPrices[index];
      setSelectedOptionPrice(price);
      setDividedPrice(Math.floor(price / quantity));
    }
  };

  return (
    <AdminPageLayout>
      <div css={s.layout}>
        {productDetail ? (
          <>
            {!isEditing ? (
              <div css={s.productLayout}>
                <button onClick={handleEdit}>수정</button>
                <button onClick={handleDelete}>삭제</button>
                <h1>{productDetail.productName}</h1>
                <img
                  src={productDetail.productImg}
                  alt={productDetail.productName}
                />
                <p>가격: {productDetail.productPrice} 원</p>
                <p>단가: {totalCost} 원</p>
                <p>수량: {productDetail.productCount} 개</p>
                <p>Category: {productDetail.categoryName}</p>
              </div>
            ) : (
              <div css={s.editLayout}>
                <div css={s.editButton}>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
                <h1>
                  <input
                    type="text"
                    name="productName"
                    value={editValues.productName}
                    onChange={handleInputChange}
                  />
                </h1>
                <ImageUpload
                  initialImage={imageUrl}
                  onImageUpload={handleImageUpload}
                  isEditing={isEditing}
                />
                <p>
                  가격:
                  <input
                    type="number"
                    name="productPrice"
                    value={editValues.productPrice}
                    onChange={handleInputChange}
                  />
                  원
                </p>
                <select
                  value={optionTitleId}
                  onChange={(e) =>
                    setOptionTitleId(parseInt(e.target.value, 10))
                  }
                >
                  <option value={0}>재료 타이틀 선택</option>
                  {optionTitles.map((optionTitle) => (
                    <option key={optionTitle.value} value={optionTitle.value}>
                      {optionTitle.label}
                    </option>
                  ))}
                </select>
                {optionTitleId !== 0 &&
                  option &&
                  option.optionNameIds &&
                  option.optionNames && (
                    <div>
                      <select
                        value={optionNameId}
                        onChange={(e) =>
                          handleOptionChange(parseInt(e.target.value, 10))
                        }
                      >
                        <option value={0}>옵션 선택</option>
                        {option.optionNameIds.map((id, index) => (
                          <option key={id} value={id}>
                            {option.optionNames[index]}
                          </option>
                        ))}
                      </select>
                      {selectedOptionPrice !== null && (
                        <div>
                          <p>선택된 옵션 가격: {selectedOptionPrice} 원</p>
                          <input
                            type="number"
                            min="1"
                            placeholder="수량"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityChange(parseInt(e.target.value, 10))
                            }
                          />
                          <p>나눠진 가격: {dividedPrice} 원</p>
                          <button type="button" onClick={handleAddOption}>
                            옵션 추가
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                <ul>
                  {addedOptions.map((opt, index) => (
                    <li key={index}>
                      {opt.name} - {opt.price} 원 / 수량: {opt.quantity} /
                      나눠진 가격: {opt.dividedPrice} 원
                    </li>
                  ))}
                </ul>
                <p>총 비용: {totalCost} 원</p>
                <p>
                  수량:
                  <input
                    type="number"
                    name="productCount"
                    value={editValues.productCount}
                    onChange={handleInputChange}
                  />
                  개
                </p>
                <CategorySelect
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelect={handleCategorySelect}
                />
              </div>
            )}
          </>
        ) : (
          <div>로딩중 ...</div>
        )}
      </div>
    </AdminPageLayout>
  );
}

export default DesktopProductDetailPage;
