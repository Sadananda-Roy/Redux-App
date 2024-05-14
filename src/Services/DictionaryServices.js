import * as AxiosService from "./AxiosServices";

export const getMeaning = async (word) => {
  try {
      const response = await AxiosService.DictGet(word);
      return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};