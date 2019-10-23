import React from "react";
import { highlightFunc} from '../../utils/highlight'

const parse = require('html-react-parser');

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