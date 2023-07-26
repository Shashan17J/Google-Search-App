import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyCQISKCaltvcHIPHBKGEGick5mealOHG3w',
    cx: '673ec324fe9324bb7'
};

export const fetchDataFromApi = async(payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload},
    });
    return data; 
};
