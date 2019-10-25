import { readDirectoryRecursive } from './file-utils'

export function FileServiceApis(app) {

    app.get('/files', function (req, res) {
        var directory = req.query["directory"]
        console.log(`directory=${directory}`)
        try {
            let resData = readDirectoryRecursive(directory); // D:\Sources\_git\react-advance
            res.send(resData);
        } catch (error) {
            res.send(error);
        }
    });

};
