import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Form = () => {

    const { userName, setUserName, searchUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        searchUser()
    }

    return (
        <form
            className="bg-white dark:bg-gray-700 mt-4  md:w-6/12 mx-auto rounded-xl shadow-xl"
            onSubmit={handleSubmit}
        >
            <div className="flex justify-between p-3">
                <input
                    type="text"
                    placeholder="username"
                    className="w-full bg-transparent border-0 outline-none"
                    value={userName.trim()}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 px-6 py-3 text-white rounded-xl hover:bg-blue-500"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form