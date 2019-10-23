import React, { useState, useEffect } from "react";
import { filterData } from '../../services/ExerciseCommentsApi'
import CommentsList from './CommentsList';

const ExerciseComments = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);


    const onSearchValueChanged = async (e) => {
        const val = e.target.value.trim();
        setSearchValue(val);
        if (!val || val == '') {
            setData([])
            return;
        }
        
        setIsSearching(true);
        var s = await filterData(val);
        setData(s)
        setIsSearching(false);
    }

    return (
        <>
            <h2 className="text-center">Gamer comments</h2>

            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-12" type="search" placeholder="Search" aria-label="Search"
                                value={searchValue}
                                onChange={onSearchValueChanged} />
                        </form>
                    </div>
                </nav>
                {
                    isSearching && (
                        <>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-full " role="progressbar" ></div>
                            </div>
                        </>
                    )}

                Comments with filter: <b>{searchValue}</b>
                <CommentsList comments={data} />
            </div>
        </>
    )
}

export default ExerciseComments;