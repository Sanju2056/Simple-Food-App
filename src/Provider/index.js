import { useState, useEffect, useContext, createContext } from 'react'
const userContext = createContext();

const UserProvider = ({ children }) => {
    const [cost, setCost] = useState(0);
    const [searchValue, setSearchValue] = useState();
    return <userContext.Provider value={{
        cost, setCost, searchValue, setSearchValue
    }}>
        {children}
    </userContext.Provider>
}
export { UserProvider, userContext };
