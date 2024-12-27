import { PlayIcon } from "@hugeicons/react"
import Link from "next/link"
import { useState } from "react"

const YtCard = ({ yt }: any) => {
    const [isOnPlay, setOnPlay] = useState<boolean>(false)
    const handlePlay = () => {
        setOnPlay(true)
    }
    return (
        <div>
            <div className="cursor-pointer h-52 relative  group overflow-hidden min-w-80" onClick={handlePlay}>
                <img className={`${isOnPlay ? 'hidden' : ""} transition-all group-hover:scale-105 duration-1000 h-52 w-full object-cover`} src={yt.thumbnail?.url} />
                <PlayIcon size={'3rem'} className={`${isOnPlay ? 'hidden' : ""} absolute  top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 group-hover:text-gray-400 `} variant="solid" />
                <iframe
                    className={`${!isOnPlay ? 'hidden' : ""} transition-all`}
                    src={`https://www.youtube.com/embed/${yt.videoId}?autoplay=${isOnPlay ? 1 : 0}`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            </div>



            <Link href={yt.fullLink} rel="noopener noreferrer" target="_blank">  {yt.title}</Link>
            <p className="text-sm text-gray-400">  {yt.description}</p>

        </div>
    )
}

export default YtCard;