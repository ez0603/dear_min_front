/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import * as s from "./style";

const ImageUpload = ({ initialImage, onImageUpload, isEditing }) => {
  const [selectedImage, setSelectedImage] = useState(initialImage);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setSelectedImage(initialImage);
  }, [initialImage]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const localUrl = URL.createObjectURL(file);
      setSelectedImage(localUrl);
      onImageUpload(file); 
    }
  };

  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current.click();
    }
  };

  return (
    <div css={s.imageContainer} onClick={handleImageClick}>
      <img src={selectedImage} alt="" css={s.productImage} />
      {isEditing && (
        <>
          <input
            type="file"
            ref={fileInputRef}
            css={s.fileInput}
            onChange={handleImageChange}
            onClick={(e) => e.stopPropagation()} 
          />
          <div css={s.overlay}>
            <span>클릭하여 이미지를 선택해주세요</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageUpload;
