import { useContext } from "react"
import { UserContext } from "../context/UserContext"

import Contact from './Contact'

const UserData = () => {

    const { data } = useContext(UserContext)

    if (data?.login) {
        return (
            <div className="bg-white dark:bg-gray-700 p-6 mt-8 mx-auto rounded-xl shadow-xl md:w-6/12 lg:w-4/12 ">
                <div className="text-center">
                    <img src={data.avatar_url} className="w-36 rounded-full block mx-auto" alt={data.login} />
                    <h3 className="mt-3 text-xl">{data.name}</h3>
                    <p>{data.bio}</p>
                </div>
                <div className="flex justify-around gap-4 p-4 mt-3 bg-gray-200 dark:bg-gray-800 rounded-xl">
                    <div className="text-center">
                        <h3>Repos</h3>
                        <p className="font-bold">{data.public_repos}</p>
                    </div>
                    <div className="text-center">
                        <h3>Followers</h3>
                        <p className="font-bold">{data.followers}</p>
                    </div>
                    <div className="text-center">
                        <h3>Following</h3>
                        <p className="font-bold">{data.following}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-around mt-6">
                   <Contact data={data}/>
                </div>
            </div>
        )
    }

    if (data?.message) {
        return (
            <p className="text-center mt-8 text-2xl">User Not Found</p>
        )
    }

    return (
        <p className="text-center mt-8 text-2xl">Please type the user name</p>
    )
}
// Please type the user name
export default UserData