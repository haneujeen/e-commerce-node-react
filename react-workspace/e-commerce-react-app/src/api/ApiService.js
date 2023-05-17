import { API_BASE_URL } from "./appConfig";

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method,
    }

    if (request) {
        options.body = JSON.stringify(request)
    }

    return fetch(options.url, options)
    .then((response) => {
        if (!response.ok) {
            return Promise.reject(response);
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Authentication error: 403 Forbidden');
        if (error.status === 403) {
            window.location.href = '/login'; // Will use navigate instead of window.location.href
        } else {
            console.error(error);
        }
        return Promise.reject(error);
    });
}

export function signin(userDTO) {
    return call("/users/signin", "POST", userDTO)
        .then((response) => {
            console.log('Response:', response)
            alert('Authentication Token: ' + response.token)
            window.location.href = "/"
    })
}