import React, { useState } from "react";
import { getData, filterData } from './FileFetchServices'
import FileList from './FileList';

const ExerciseReadingFiles = () => {
    const [data, setData] = useState([]);
    const [folderValue, setFolderValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSearchValueChanged = async (e) => {
        setIsLoading(true);
        const val = e.target.value.trim();

        setData(await filterData(folderValue, val))
        setIsLoading(false);
    }

    const onLoadSubmit = async (e) => {
        setIsLoading(true);
        setData(await getData(folderValue))

        setIsLoaded(true);
        setIsLoading(false);
    }
    const onResetClick = async (e) => {
        setData([])
        setIsLoaded(false)
    }

    return (
        <>
            <h2 className="text-center">Files</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-collapse" id="navbarSupportedContent">
                    {!isLoaded && (
                        <>
                            <form className="form-inline  sm-12 my-lg-12">
                                <input className="form-control sm-12" type="text" placeholder="Folder to look for" aria-label="Search"
                                    value={folderValue} onChange={(event) => setFolderValue(event.target.value)} />
                                <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="button" onClick={onLoadSubmit} disabled={isLoading}>
                                    <i className="fas fa-cloud-download-alt"></i> Load</button>
                            </form>
                        </>
                    )}
                    {isLoaded && (
                        <>
                            <form className="form-inline  sm-12 my-lg-12">
                                <input className="form-control mr-sm-12 hidden" type="search" placeholder="Search" aria-label="Search"
                                    value={searchValue}
                                    onChange={(event) => setSearchValue(event.target.value)} />
                                <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="button" onClick={onResetClick}>
                                    <i className="fas fa-undo"></i>
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </nav>
            {isLoading && (
                <>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-full " role="progressbar" ></div>
                    </div>
                </>
            )}
            {isLoaded && (
                <>
                    <div className="row">
                        <div className="col-sm">
                            Found <strong>{data.length}</strong> result.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <FileList searchKey={searchValue} fileList={data} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ExerciseReadingFiles;