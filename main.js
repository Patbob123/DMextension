async function request(){
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'yYhOxvaCC7nUGEBSGCxmXA==BqbrVTV379sEVMzT'
        }
    }

    const res = await fetch("https://api.api-ninjas.com/v1/randomword", options)
    const data = await res.json()

    document.getElementById("idk").innerHTML = data["word"]
}
request()