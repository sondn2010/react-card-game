
const DATA_STORAGE_KEY = 'sampleKey-photos'
const DATA_TIMEOUT = 60*3 // timeout in minutes

const getData = async () =>  {
    var d = new Date();
    var storage = localStorage.getItem(DATA_STORAGE_KEY);
    
    if (storage && storage.requestedTime && storage.requestedTime < d.setMinutes(d.getMinutes() + DATA_TIMEOUT)) {
        return storage.data;
    }

    var res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)    
    var content = await res.json()    

    if (!content) {
        throw "No data returned.";
    }

    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify({ requestedTime: d, data: content }))
    return content
};

export async function filterData (searchValue){
    var allData = await getData();
    if (!allData) 
        return null;

    return allData.filter((e) => {
        return e.title.includes(searchValue);
    });
}
