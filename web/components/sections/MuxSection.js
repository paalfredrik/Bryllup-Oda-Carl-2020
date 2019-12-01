import MuxPlayer from '../Muxplayer'
import React from 'react'

function MuxSection (props) {
    const {muxVideo} = props
    console.log(props)
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <MuxPlayer
                assetDocument={muxVideo.asset}
                autoload={true}
                autoplay={true}
                muted={false}
            />
        </div>
    )
}

export default MuxSection