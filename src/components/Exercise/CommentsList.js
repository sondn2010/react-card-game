import React from "react";
import CommentsDetail from './CommentsDetail';

const CommentsList = props => (
    <>
        {props.comments.map((item, index) => (
            <CommentsDetail comment={item} key={item.id} />
        ))}
    </>
)

export default CommentsList;