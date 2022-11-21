import React from "react";

type Active = {
    isActive: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const iActive = {
    isActive: false,
    setActive: () => {}
}

export const Context = React.createContext<Active>(iActive);
