import React from 'react';
 
//the functional component of UserOutput

const userOutput = (props) => {
return (

<div className="UserOutput">
<p>My internet alias is {props.username}</p>
    <p>This is the second paragraph</p>
</div>

)
};


//export
export default userOutput;