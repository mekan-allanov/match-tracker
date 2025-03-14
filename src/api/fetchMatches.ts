import { axiosInstance } from "./axiosInstance";
import { Match } from "./types";

const API_URL = "/fronttemp";

export const fetchMatches = async (): Promise<Match[]> => {
  const { data } = await axiosInstance(API_URL);
  return data.data.matches;
};
