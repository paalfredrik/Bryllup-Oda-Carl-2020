import EmbedHTML from './EmbedHTML'
import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import PortableText from '@sanity/block-content-to-react'

const serializers = {
  types: {
    embedHTML: EmbedHTML,
    youtube: ({node}) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)

    }
  }
}

export default serializers
