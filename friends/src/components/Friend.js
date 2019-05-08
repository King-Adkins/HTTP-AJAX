import React from 'react';

const Friend = props => {
    return (
        <span>
            <div>
                { props.friend.name }
            </div>
            <div>
                { props.friend.age }
            </div>
            <div>
                { props.friend.email }
            </div>
            <h1>Friends List</h1>
    </span>
 );
};

export default Friend;