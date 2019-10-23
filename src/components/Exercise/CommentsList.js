import React from "react";
import CommentsDetail from './CommentsDetail';

const CommentsList = props => (
    <>
        {props.comments.map((item, index) => (
            <CommentsDetail key={item.id}
                comment={item} />
        ))}
    </>
)

export default CommentsList;