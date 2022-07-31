import React from "react"
import { Frame } from "./styles"

interface VideoFrameInterface {
  videoKey: string
  width?: string
  height?: string
}

const VideoFrame = ({ videoKey }: VideoFrameInterface) => {
  return <Frame
    src={"https://www.youtube.com/embed/" + videoKey}
    title="YouTube video player"
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </Frame>
}

export default VideoFrame