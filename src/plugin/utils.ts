export const utils = {
  setSessionStorage (key, val) {
    if (!key) { return; }
    if (typeof val !== 'string') {
      val = JSON.stringify(val);
    }
    sessionStorage.setItem(key, val);
  },
  getSessionStorage (key) {
    let val = sessionStorage.getItem(key);
    if (!key) { return; }
    if (typeof val === 'string') {
      val = JSON.parse(val);
    }
    return val;
  },
  removeSessionStorage (key) {
    if (!key) { return; }
    sessionStorage.removeItem(key);
  }
};

