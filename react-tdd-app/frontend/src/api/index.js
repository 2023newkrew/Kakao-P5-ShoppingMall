const baseUrl = process.env.REACT_APP_API_BASE_URL;

function fetchProducts() {
  return fetch(`${baseUrl}/products`).then((response) => response.json());
}

function fetchOptions() {
  return fetch(`${baseUrl}/options`).then((response) => response.json());
}

export { fetchProducts, fetchOptions };
