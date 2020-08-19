import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'



const CommentList = (props) => {
// passing props to our stateless commentList functional component. 

    return (
        <div>
           {props.comments && props.comments.map(comment =>
            <li key={comment.id}>{comment.content}<br></br>
        //if there are comments we want to get the content of the comments
        //we have a key prop as a unique identifier.
            </li>
            )} 
        </div>
    )
}

export default connect(null, {addComment}) (CommentList)
// we don't need mapstatetoprops so we call null, addComment is equivelant to mapDispatchtoprops
