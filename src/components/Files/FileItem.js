import React from "react";
import { highlightFunc } from '../../utils/highlight'

const parse = require('html-react-parser');

function FileItem({ file, searchKey }) {
    return (
        <>
            <li className="media">
                {!file.isDirectory && (
                    <>
                        <i className="fas fa-file text-secondary"></i>
                    </>
                )}
                {file.isDirectory && (
                    <>
                        <i className="fas fa-folder text-success"></i>
                    </>
                )}
                {parse(highlightFunc(file.filePath, searchKey))}
            </li>
        </>
    )
}

export default FileItem;