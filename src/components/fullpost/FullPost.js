import React from 'react';

const FullPost = ({value}) => {
    return (
        <div>
            {
                <div>
                    <p>id - {value.id}</p>
                    <p>title - {value.title}</p>
                    <p>Text: {value.body}</p>
                    <p>Userid: {value.userId}</p>
                </div>
            }
        </div>
    );
};

export default FullPost;