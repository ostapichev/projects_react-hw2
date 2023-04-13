import React from 'react';

const Post = ({value, lift}) => {
    return (
        <div>
                {
                    <div className={'post'}>
                        <p>id - {value.id} title - {value.title}</p>
                        <button onClick={() => {
                            lift(value);
                        }}>detail</button>
                    </div>
                }
        </div>
    );
};

export default Post;