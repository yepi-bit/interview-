function ajax(url) {
    const p = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        // true异步，避免卡住， false为同步

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {

                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404) {
                    reject(new Error("404 not found"));
                }

            }
        };

        xhr.send(null);
    });
    return p;
}
