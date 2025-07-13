function deepClone(data) {
    let ans = null;
    if (Array.isArray(data)){
        ans = [...data];
    }else{
        ans = {...data};
    }
    return ans;
//     if(Array.isArray(data)){
//         return data.map(deepClone);
//     }
//
//     if(typeof data === 'object'){
//         const clone = {};
//         for (const key in data) {
//             clone[key] = deepClone(data[key]);
//         }
//         return clone;
//     }
//
//     return data;
}





