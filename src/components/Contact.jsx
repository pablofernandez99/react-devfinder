import { FaTwitter, FaLocationArrow } from 'react-icons/fa'

const Contact = ({data}) => {
    return (
        <>
            <div className="flex gap-4">
                <span>
                    <FaTwitter
                        className="text-blue-600 text-2xl"
                    />
                </span>
                <span>
                    {data.twitter_username ? data.twitter_username : 'Not available'}
                </span>
            </div>
            <div className="flex gap-4">
                <span>
                    <FaLocationArrow
                        className="text-blue-600 text-2xl"
                    />
                </span>
                <span>
                    {data.location ? data.location : 'Not available'}
                </span>
            </div>
        </>
    )
}

export default Contact