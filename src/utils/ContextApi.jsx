import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);
    return (
        <Context.Provider value={{
            imageSearch,
            setImageSearch
        }}>
            {props.children}
        </Context.Provider>
    );
};

// AIzaSyCQISKCaltvcHIPHBKGEGick5mealOHG3w
// 673ec324fe9324bb7
