import { RestaurantData } from "./interface";

export const getRestaurantData = (): Promise<RestaurantData[]> => {
  const authKey = process.env.REACT_APP_API_KEY || "";
  return fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
    headers: {
      Authorization: authKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return [];
      }
    })
    .catch((e) => {
      console.error("[ERROR] error retrieving restaurant data");
      return [];
    });
};
