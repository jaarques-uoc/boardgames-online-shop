const doGet = url => fetch(url, {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        console.log(`Response not ok: ${response.status}`)
    });

export {doGet}