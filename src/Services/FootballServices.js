import * as AxiosService from "./AxiosServices";

export const fetchMatches = async () => {
    try {
        const response = await AxiosService.Get('hello');
        return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    // fetch("http://api.football-data.org/v4/matches");
  };