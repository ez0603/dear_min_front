import { useEffect, useState } from "react";
import { searchOptionRequest } from "../apis/api/product";

function useGetOption(optionTitleId) {
  const [option, setOptions] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await searchOptionRequest(optionTitleId);
        setOptions(response.data);
      } catch (error) {
        console.log("에러", error);
      }
    };

    if (optionTitleId) {
      getOptions();
    }
  }, [optionTitleId]);

  return { option };
}

export default useGetOption;
