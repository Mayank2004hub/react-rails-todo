import axios from "axios";

const client = axios.create({
  timeout: parseInt(process.env.REACT_APP_REQUEST_TIMEOUT)
})

const csrfToken = () => {
  return document.querySelector('[name=csrf-token]').content
}

if(process.env.REACT_APP_LOGGING_ENABLED === "true") {
  client.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
  })

  client.interceptors.response.use(response => {
    console.log('Response:', response)
    return response
  })
}

const getRequest = (path, params = null, headers = null) => {
  return client.get(path, {
    params: params,
    headers: headers
  });
};

const postRequest = (path, body = null, headers = null) => {
  return client.post(path, body, {
    headers: headers
  });
};

const deleteRequest = (path, body = null, headers = null) => {
  return client.delete(path, {
    data: body,
    headers: {
      ...headers,
      ["X-CSRF-Token"]: csrfToken()
    }
  });
};

const putRequest = (path, body = null, headers = null) => {
  return client.put(path, body, {
    headers: headers
  });
};

const putRequestWithoutBaseUrl = (url, body = null, headers = null) => {
  return client.put(url, body, {
    headers: headers
  });
};

const BackendHelper = {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
  putRequestWithoutBaseUrl
};

export default BackendHelper;
