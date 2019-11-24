export const memoryStorage = () => {
  let storage = {};

  return {
    getItem(key) {
      return storage[key] || null;
    },

    setItem(key, value) {
      storage = { ...storage, [key]: value };
    }
  };
};

export const getStorage = key => {
  try {
    window[key].getItem('random');
    return window[key];
  } catch {
    return memoryStorage();
  }
};
