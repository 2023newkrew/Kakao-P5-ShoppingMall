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
};

export default api;
