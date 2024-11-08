/** @jsxImportSource @emotion/react */
import { useState } from "react";
import ImageUpload from "../../components/ProductComponents/ImageUpload/ImageUpload";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../apis/firebase/firebaseConfig";
import useGetOption from "../../hooks/useGetOption";
import { registerProductMaterial } from "../../apis/api/product";

function MenuAdd({ categories, onAddProduct, optionTitles }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [costPrice, setCostPrice] = useState(0);
  const [productImg, setProductImg] = useState("");
  const [productCount, setProductCount] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [optionTitleId, setOptionTitleId] = useState(0);
  const [optionNameId, setOptionNameId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [localFile, setLocalFile] = useState(null);
  const { option } = useGetOption(optionTitleId);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
  const [dividedPrice, setDividedPrice] = useState(0);
  const [addedOptions, setAddedOptions] = useState([]);

  const handleImageUpload = async (file) => {
    setLocalFile(file);
    try {
      const storageRef = ref(storage, `products/${file.name}`);
      const uploadResult = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(uploadResult.ref);
      setProductImg(url);
    } catch (error) {
      console.error("Image upload failed", error);
      alert("이미지 업로드 실패");
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
      setOptionNameId(0);
      setSelectedOptionPrice(null);
      setQuantity("");
      setDividedPrice(0);
      setCostPrice((prevCost) => prevCost + dividedPrice);
    }
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const selectedCategory = categories.find((cat) => cat.value === categoryId);
    const categoryName = selectedCategory ? selectedCategory.label : "";

    const optionNameIds = addedOptions.map((opt) => opt.optionNameId);
    const productQuantities = addedOptions.map((opt) => opt.quantity)
    try {
      const newProductId = await registerProductMaterial({
        productReqDto: {
          productName,
          productPrice: parseInt(productPrice, 10) || 0,
          costPrice,
          productImg,
          productCount: parseInt(productCount, 10) || 0,
          categoryId,
          categoryName,
        },
        optionNameIds,
        productQuantities,
      });
      alert("Product and materials added successfully with ID: " + newProductId);
      setAddedOptions([]);
    } catch (error) {
      console.error("Error registering product and materials:", error);
      alert("Failed to register product and materials.");
    }
  };

  return (
    <div>
      <h2>상품 추가</h2>
      <input
        type="text"
        placeholder="상품명"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="가격"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <select
        value={optionTitleId}
        onChange={(e) => setOptionTitleId(parseInt(e.target.value, 10))}
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
              onChange={(e) => handleOptionChange(parseInt(e.target.value, 10))}
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
            {opt.name} - {opt.price} 원 / 수량: {opt.quantity} / 나눠진 가격:{" "}
            {opt.dividedPrice} 원
          </li>
        ))}
      </ul>
      <p>총 비용: {costPrice} 원</p>
      <ImageUpload
        initialImage={""}
        onImageUpload={handleImageUpload}
        isEditing={true}
      />
      <input
        type="number"
        placeholder="수량"
        value={productCount}
        onChange={(e) => setProductCount(e.target.value)}
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(parseInt(e.target.value, 10))}
      >
        <option value={0}>카테고리 선택</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleAddProduct}>
        추가
      </button>
    </div>
  );
}

export default MenuAdd;
