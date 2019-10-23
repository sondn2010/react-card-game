import React from "react";
import CommentsDetail from './CommentsDetail';

const AlbumPhotos = props => (
    <>
        {props.photos.map((item, index) => (
            <>
                <AlbumPhotos photo={item} key={item.id} />
            </>
        ))}
    </>
)

export default AlbumPhotos;