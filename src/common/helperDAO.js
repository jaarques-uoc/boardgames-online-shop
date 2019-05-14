const doGet = url => fetch(url, {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
})
    .then(handleResponse);

const doPost = (url, body) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
    .then(handleResponse);

const doPut = (url, body) => fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
    .then(handleResponse);

const handleResponse = response => {
    if (response.ok) {
        return response.json();
    }

    console.log(`Response not ok: ${response.status}`);
    throw '';
};

export {doGet, doPost, doPut}