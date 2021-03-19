import React from 'react';


function Story ({ story }) {
    return (
        <div className='story-container'>
            <span className='story-first-line'>
                <h1 className='story-title'>{story.title}</h1>
                <h4 className='story-source'>({story.source})</h4>
            </span>
            <span className='story-second-line'>
                <a className='story-points'>{story.points} points</a>
                <> | </>
                <a className='story-author'>{story.author}</a>
                <> | </>
                <a className='story-time'>{story.timestamp}</a>
                <> | </>
                <a>flag</a>
                <> | </>
                <a>hide</a>
                <> | </>
                <a className='story-comments'>{story.comments} comments</a>
                <> | </>
                <a>instapaper</a>
                <> | </>
                <a>save to pocket</a>
            </span>

        </div>
    );
}


export default Story