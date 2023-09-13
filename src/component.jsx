import React from 'react'

const Component = (props) => {
    const {video} = props;
    return (
        <div className='container'>
            <div className='video-container'>
                <img src = "https://i.ytimg.com/vi/Sa0sgXmG0Q0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxvCNE9bsBxO1mhOUaICOW-Borfg" alt = "Video Logo"></img>
            </div>
            <div className='video-desc'>
                <h1>{video.heading}</h1>
                <p>views {video.views}</p>
                <div className='channel'>
                    <img src={video.channelLogo} alt="channel logo" className='channel-logo'/>
                    <p>{video.channelName}</p>
                </div>
                <h6>{video.desc}</h6>
            </div>
        </div>
    )
}

export default Component
