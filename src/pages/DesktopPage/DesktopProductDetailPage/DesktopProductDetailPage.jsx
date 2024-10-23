/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetProductsDetail from "../../../hooks/useGetProductDetail";
import ImageUpload from "../../../components/ProductComponents/ImageUpload/ImageUpload";
import { updateProduct } from "../../../apis/api/product"; // updateProduct API import
import useCategories from "../../../hooks/useCategories";
import CategorySelect from "../../../components/ProductComponents/CategorySelect/CategorySelect";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase Storage import
import { storage } from "../../../apis/firebase/firebaseConfig";

function DesktopProductDetailPage() {
  const { productId } = useParams();
  const { productDetail, isLoading } = useGetProductsDetail(productId);
  const [imageUrl, setImageUrl] = useState(productDetail?.productImg || "");
  const [localFile, setLocalFile] = useState(null); // File to upload state
  const [isEditing, setIsEditing] = useState(false);
  const categories = useCategories();

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
    setImageUrl(productDetail.productImg); // Reset to original image
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

    const updatedProduct = {
      productId: parseInt(productId),
      productName: editValues.productName || "",
      productPrice: parseInt(editValues.productPrice, 10) || 0,
      costPrice: parseInt(editValues.costPrice, 10) || 0,
      productCount: parseInt(editValues.productCount, 10) || 0,
      categoryId: selectedCategory?.value || productDetail.categoryId,
      productImg: updatedImageUrl || "",
    };

    try {
      await updateProduct(updatedProduct);
      alert("Product updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update product", error);
      alert("Failed to update product");
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
    }
  }, [productDetail]);

  const handleImageUpload = (file) => {
    setLocalFile(file);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {productDetail ? (
        <>
          {!isEditing ? (
            <>
              <button onClick={handleEdit}>Edit</button>
              <h1>{productDetail.productName}</h1>
              <img
                src={productDetail.productImg}
                alt={productDetail.productName}
              />
              <p>가격: {productDetail.productPrice} 원</p>
              <p>단가: {productDetail.costPrice} 원</p>
              <p>수량: {productDetail.productCount} 개</p>
              <p>Category: {productDetail.categoryName}</p>
            </>
          ) : (
            <>
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
              <p>
                단가 :
                <input
                  type="number"
                  name="costPrice"
                  value={editValues.costPrice}
                  onChange={handleInputChange}
                />
                원
              </p>
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

              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <div>로딩중 ...</div>
      )}
    </div>
  );
}

export default DesktopProductDetailPage;
