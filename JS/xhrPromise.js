function getXhrPromise(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;
        xhr.open(method, url, true);

        xhr.onreadystatechange = () => {
                // readyState ---  1,2,3,4
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            }
            // 设置错误回调
        xhr.onerror = () => reject(xhr.responseText);
        // xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");

        xhr.send(null);
    })
}

async function doReq() {
    let res = await getXhrPromise("GET", "http://192.168.110.11:3000/user/playlist?uid=537069044")
    console.log(res)
}

doReq()