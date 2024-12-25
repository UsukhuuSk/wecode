import { useState } from "react"

const PhotoView = ({ size, src, alt, children }: any) => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen((prev) => !prev)
    }
    return <div onClick={handleToggle} className={`cursor-pointer transition-all ${open ? 'fixed w-full inset-0 min-h-screen flex items-center justify-center bg-[#000000a2] z-50' : 'overflow-hidden'}`} style={size && !open ? { height: size, width: size } : {}}>
        {<img className="object-cover" src={src} alt={alt} />}
    </div>
}

export default PhotoView