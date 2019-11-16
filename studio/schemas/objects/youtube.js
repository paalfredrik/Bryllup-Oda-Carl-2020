import React from 'react'
import getYoutubeID from 'get-youtube-id' ;
import getYouTubeID from 'get-youtube-id';

const YouTubePreview = ({ value }) => {
    const id = getYouTubeID(value.url);
    const url = `https://www.youtube.com/embed/${id}`;
    if(!id) {
return <div>Missing Youtube URL</div>;

    }
    return ( 
    <iframe
    title="Youtube Preview"
    width="560" 
    height="315" 
    src= {url}
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    
    </iframe>

);
}
export default {
    name: 'youtube', 
    type: 'object',
    title: 'Youtube Embed',
    fields: [
        {
            name: 'url',
            type: 'url',
            title: 'URL',

        },

    ],
    preview: {
        select: {
            url: 'url'
        },
        component: YouTubePreview,
    }
};