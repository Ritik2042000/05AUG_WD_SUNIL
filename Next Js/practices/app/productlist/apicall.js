
const apiCall = async (url) => {
    let data = await fetch(url);
    data = await data.json();
    return data.products
}

export default apiCall;
