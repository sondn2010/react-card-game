import { DATA_STORAGE_KEY, DATA_TIMEOUT } from '../../const'

const getData = async () =>  {
    var d = new Date();
    var storage = JSON.parse(localStorage.getItem(DATA_STORAGE_KEY));
    
    if (storage && storage.requestedTime && storage.requestedTime < (d.setMinutes(d.getMinutes() + DATA_TIMEOUT))) {
        return storage.data;
    }

    var res = await fetch(`https://jsonplaceholder.typicode.com/posts`)    
    var content = await res.json()
    
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify({ requestedTime: d.getTime(), data: content }))
    return content
};

export async function filterData (searchValue){
    var allData = await getData();
    if (!allData) 
        return null;

    return allData.filter((e) => {
        return e.title.includes(searchValue) || e.body.includes(searchValue) ;
    });
}
