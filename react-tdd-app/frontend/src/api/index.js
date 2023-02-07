const baseUrl = process.env.REACT_APP_BASE_URL;

function fetchProducts() {
  return fetch(`${baseUrl}/products`).then((response) => response.json());
}

export { fetchProducts };
