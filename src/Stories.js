import React from 'react';
import Story from './Story';

function Stories ({ stories }) {
    return (
        <ol className='stories-container' start={1}>
            {stories.map(story =>(
                <li key={story.id}>
                <Story  story={story} />
                </li>
            ))}
                
        </ol>
    );
}

export default Stories