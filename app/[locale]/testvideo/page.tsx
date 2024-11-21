import dynamic from "next/dynamic";
import VideoCourse from "../../../components/video/VideoCourse";
export default function page() {
  return (<div className="text-white h-[1000px] flex items-center justify-center">
    <VideoCourse id={8} locale="mn" />
  </div>)
}
