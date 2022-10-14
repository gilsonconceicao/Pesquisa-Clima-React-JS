import React, { useEffect, useState } from "react";

export const authStore = React.createContext([]);

export const AuthStoreContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    const bankData = []

    useEffect(() => {
        const checkedInItems = () => {
            //change state for sigin(entrar)
            const dataStore = localStorage.getItem('@dataStoreUser');
            const lastName = localStorage.getItem('@name_user');
            const nameUser = localStorage.getItem('@last_name_user');
            if (dataStore && lastName && nameUser) {
                setData(dataStore)
            }
        }
        checkedInItems();
    }, [])

    const getNameAndLastNameUser = (firstName, lastName) => {
        const objectUser = {
            firstName,
            lastName
        }

        bankData.push(objectUser)

        localStorage.setItem('@dataStoreUser', JSON.stringify(objectUser));
        localStorage.setItem('@name_user', JSON.stringify(firstName)); 
        localStorage.setItem('@last_name_user', JSON.stringify(lastName)); 
        setData(objectUser);
    }

    return (
        <authStore.Provider value={{ getNameAndLastNameUser, isLogged: !!data }}>
            {children}
        </authStore.Provider>
    )
}

export const UseHookStoreAuth = () => React.useContext(authStore); 