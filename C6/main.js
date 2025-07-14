function deepClone(data) {
    return Array.isArray(data) ? [...data] : {...data};
}





