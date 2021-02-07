const URL = {
    HOST: "http://localhost:5000"
}

const HTTP_STATUS_CODE = {
    OK: 200,
    CORRECT: 201,
    BAD_REQUEST: 400,
    FORBIDDEN: 401,
    NOT_FOUND: 404,
    ERROR_SERVER: 500,
    BAD_GATEWAY: 502,
}

const HTTP_REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST'
}

/* Function for call fetch data */
const fetchAsync = async (url, method, { body = {}, headers = {} } = {}) => {
    const options = (method === HTTP_REQUEST_METHOD.GET) ?
        { method, headers } :
        { method, headers, body };
    let response = {
        error: true,
        message: '',
    }
    try {
        const fetchResponse = await fetch(url, options);
        if (fetchResponse.status !== HTTP_STATUS_CODE.OK) {
            response.message = await fetchResponse.text();
        } else {
            response.error = false;
            response.message = await fetchResponse.json();
        }
    } catch (error) {
        response.message = error;
    }
    return response;
}

/* Control of the call methods API */
const API = {
    GET: {
        async getDataMovies() {
            return await fetchAsync(`${URL.HOST}/api/allmovies`, HTTP_REQUEST_METHOD.GET);
        }
    },
    POST: {
        async insertDataMovies() {
            return await fetchAsync(`${URL.HOST}/api/insertmovies`, HTTP_REQUEST_METHOD.POST);
        }
    }
}



