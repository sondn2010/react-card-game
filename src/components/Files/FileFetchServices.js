import { FOLDER_STORAGE_KEY } from '../const'

export const getData = async (directory) => {
    let storageKey = `${FOLDER_STORAGE_KEY}-${directory}`

    var storageData = JSON.parse(localStorage.getItem(storageKey));
    if (storageData) {
        return storageData
    }

    var res = await fetch(`/files?directory=${directory}`)
    var content = await res.json()
    localStorage.setItem(storageKey, JSON.stringify(content))
    return content
};

export async function filterData(directory, searchValue) {
    var allData = await getData(directory);
    if (!allData)
        return null;

    return allData.filter((e) => {
        return e.includes(searchValue);
    });
}
