import React from "react";

const CommentsDetail = props => (
    <>
        <div className="blog-post">
            <h3 className="blog-post-title">{props.comment.title}</h3>
            {props.comment.body}
        </div>
    </>
)

export default CommentsDetail;