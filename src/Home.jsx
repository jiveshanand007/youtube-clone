import React from 'react'
import Component from './component'
import logo from "./logo.svg"

const videos=[
    {
        heading:"video heading",
        channelName:'channel name',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur repellat reiciendis placeat eius dolore aliquam vero rerum eligendi impedit ad optio pariatur, illo exercitationem sapiente error veniam, quasi consequuntur.",
        channelLogo: logo,
        views:'500k',
    },
    {
        heading:"video heading",
        channelName:'channel name',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur repellat reiciendis placeat eius dolore aliquam vero rerum eligendi impedit ad optio pariatur, illo exercitationem sapiente error veniam, quasi consequuntur.",
        channelLogo: logo,
        views:'500k',
    },
    {
        heading:"video heading",
        channelName:'channel name',
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur repellat reiciendis placeat eius dolore aliquam vero rerum eligendi impedit ad optio pariatur, illo exercitationem sapiente error veniam, quasi consequuntur.",
        channelLogo: logo,
        views:'500k',
    }
]


const Home = () => {
  return (
    <>
    {videos.map((video, idx)=> {
        return(
            <Component video={video} key={idx}/>
            )
        })}
    </>
  )
}

export default Home
