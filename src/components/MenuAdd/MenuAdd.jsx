/** @jsxImportSource @emotion/react */
import { useState } from "react";
import ImageUpload from "../../components/ProductComponents/ImageUpload/ImageUpload";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../apis/firebase/firebaseConfig"; // Firebase Storage 설정 가져오기

function MenuAdd({ categories, onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [productImg, setProductImg] = useState(""); // URL로 저장할 상태
  const [productCount, setProductCount] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [localFile, setLocalFile] = useState(null);

  // 이미지 업로드 후 URL 설정
  const handleImageUpload = async (file) => {
    setLocalFile(file); // 로컬 파일 저장

    try {
      const storageRef = ref(storage, `products/${file.name}`);
      const uploadResult = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(uploadResult.ref); // URL 가져오기
      setProductImg(url); // URL 상태로 설정
    } catch (error) {
      console.error("Image upload failed", error);
      alert("이미지 업로드 실패");
    }
  };

  const handleAddProduct = () => {
	const selectedCategory = categories.find((cat) => cat.value === categoryId);
	const categoryName = selectedCategory ? selectedCategory.label : "";
  
	// 추가 전 값 확인
	console.log("Product Name:", productName);
	console.log("Product Price:", productPrice);
	console.log("Cost Price:", costPrice);
	console.log("Product Count:", productCount);
	console.log("Category ID:", categoryId);
	console.log("Category Name:", categoryName);
	console.log("Product Image URL:", productImg);
  
	onAddProduct(
	  productName,
	  parseInt(productPrice, 10) || 0,
	  parseInt(costPrice, 10) || 0,
	  productImg,
	  parseInt(productCount, 10) || 0,
	  categoryId,
	  categoryName
	);
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
      <input
        type="number"
        placeholder="단가"
        value={costPrice}
        onChange={(e) => setCostPrice(e.target.value)}
      />
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
      <button onClick={handleAddProduct}>추가</button>
    </div>
  );
}

export default MenuAdd;
