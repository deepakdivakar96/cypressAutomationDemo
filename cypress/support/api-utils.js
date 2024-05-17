

// Utility function to make a GET request
export const getRequest = (url, headers = {}, queryParams = {}) => {
  return cy.request({
    method: "GET",
    url: url,
    headers: headers,
    qs: queryParams,
  });
};

// Utility function to make a POST request
export const postRequest = (url, body = {}, headers = {}, queryParams = {}) => {
  return cy.request({
    method: "POST",
    url: url,
    body: body,
    headers: headers,
    qs: queryParams,
  });
};

// Utility function to make a PUT request
export const putRequest = (url, body = {}, headers = {}, queryParams = {}) => {
  return cy.request({
    method: "PUT",
    url: url,
    body: body,
    headers: headers,
    qs: queryParams,
  });
};

// Utility function to make a PUT request
export const patchRequest = (url, body = {}, headers = {}, queryParams = {}) => {
  return cy.request({
    method: "PATCH",
    url: url,
    body: body,
    headers: headers,
    qs: queryParams,
  });
};

// Utility function tomake a DELETE request
export const deleteRequest = (url, headers = {}, queryParams = {}) => {
  return cy.request({
    method: "DELETE",
    url: url,
    headers: headers,
    qs: queryParams,
  });
};