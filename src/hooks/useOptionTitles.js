import { useQuery } from "react-query";
import { useState } from "react";
import { searchAllOptionTitleRequest } from "../apis/api/product";

function useOptionTitles(props) {
  const [optionTitles, setoptionTitles] = useState([]);

  useQuery(["optionTitleQuery"], searchAllOptionTitleRequest, {
    onSuccess: (response) => {
      const { optionTitlesId, optionTitleNames } = response.data;
      console.log(response.data);
	  setoptionTitles(
		optionTitlesId.map((id, index) => ({
		  value: id,
		  label: optionTitleNames[index],
		}))
	  );
	},
    onError: (error) => {
      console.log(error);
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return optionTitles;
}

export default useOptionTitles;
