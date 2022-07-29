import { Falior_data, Succsss_data } from "../Redux/Actiontype";

export const Success = (payload) => {
  return { type: Succsss_data, payload };
};

export const Falior = () => {
  return { type: Falior_data };
};

export const Start_Loading = () => {
    return { type: "loading" };
  };
