const serverURL = 'http://localhost:4000';

const api = {
  async get(path: string, params: any) {
    try {
      const paramsStr = new URLSearchParams(params).toString();
      const response = await fetch(`${serverURL}${path}?${paramsStr}`);

      return await response.json();
    } catch (error) {
      console.error(error);
      return {};
    }
  },
  async post(path: string, params: any) {
    try {
      const paramsStr = JSON.stringify(params);
      const response = await fetch(`${serverURL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: paramsStr,
      });
      return await response.json();
    } catch (error) {
      console.error(error);
      return {};
    }
  },
};

export default api;
