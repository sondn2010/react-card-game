import React from "react";
const parse = require('html-react-parser');

function highlightFunc(content, highlightText) {
    var
        pattern = new RegExp(highlightText, 'g'),
        replaceWith = '<mark>$&</mark>';
    return content.replace(pattern, replaceWith);
}

function CommentsDetail(props) {
    return (
        <>
            <div className="blog-post">
                <h3 className="blog-post-title">{parse(highlightFunc(props.comment.title, props.searchKey))}</h3>
                <div>{parse(highlightFunc(props.comment.body, props.searchKey))}</div>
            </div>
        </>
    )
}

export default CommentsDetail;