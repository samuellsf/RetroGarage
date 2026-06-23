export default {

  get(key) {
    const data = localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : [];
  },

  save(key, value) {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  },

  remove(key) {
    localStorage.removeItem(key);
  }

};