import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [data, setData] = useState(null)

    const url = `https://api.github.com/users/${userName}`

    const searchUser = () => {
        try {
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    setData(data)
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{ userName, setUserName, searchUser, data }}>
            {children}
        </UserContext.Provider>
    )
}
