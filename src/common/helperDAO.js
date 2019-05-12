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

        console.log(`Response not ok: ${response.status}`);
    });

const doPost = (url, body) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        console.log(`Response not ok: ${response.status}`);
    });

export {doGet, doPost}