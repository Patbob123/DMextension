export default function request(api, method, data) {
    console.log(sessionStorage);
    let fetchinput = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (method == 'post') {
        data.authkey = ""// USE　sessionStorage.getItem("authkey") ON PUBLISH
        fetchinput.body = JSON.stringify(data);
    } 

    console.log(data)
    return new Promise((resolve, reject) => {
        fetch(`${api}`, fetchinput).then(res => {
        //     fetch(`http://localhost:160${api}`, fetchinput).then(res => {
            console.log(res)
            status = res.status;
            return res.json();
        }
        ).then(res => {
            if (status >= 400 && status <= 600) {
                console.log(api + " Error: " + res); reject(res[0].error);
            } else {
                console.log(api, res); resolve(res);
            }
        }).catch(err => {
            console.log(err)
            reject(api + " Error: " + err);
        });

    })
}

['get', 'post', 'delete'].forEach((method) => {
    request[method] = (api, data) => request(api, method, data)
});