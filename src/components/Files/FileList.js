import React from "react";
import FileItem from './FileItem';

const parse = require('html-react-parser');

function FileList({ fileList, searchKey }) {
    return (
        <>
            <ul className="list-unstyled">
                {fileList.map((item, index) => (
                    <FileItem searchKey={searchKey} file={item} key={index} />
                ))}
            </ul>
        </>
    )
}

export default FileList;