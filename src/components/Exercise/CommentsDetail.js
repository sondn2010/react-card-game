import React from "react";
const parse = require('html-react-parser');

//searchKey
const hightlightFunc = (inputText, hightlightText) => {
    var outputText = inputText;
    var index = inputText.indexOf(hightlightText);
    if (index >= 0) {
        outputText = inputText.substring(0, index) + "<span class='highlight'>" + inputText.substring(index, index + hightlightText.length) + "</span>" + inputText.substring(index + hightlightText.length);
    }
    return outputText;
}

function CommentsDetail(props) {
    return (
        <>
            <div className="blog-post">
                <h3 className="blog-post-title">{parse(hightlightFunc(props.comment.title, props.searchKey))}</h3>
                <div>{parse(hightlightFunc(props.comment.body, props.searchKey))}</div>
            </div>
        </>
    )
}

export default CommentsDetail;