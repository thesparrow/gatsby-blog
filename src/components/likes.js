import React, {useState} from 'react';

const Likes = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="likes">
            <h3>Click if you like the post.</h3>
            <h3> likes {count} </h3>
            <button onClick={()=> setCount(count+1)}>
                click me</button>
        </div>
    );
}
export default Likes 