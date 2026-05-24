const _AUTH = (function () {
  const KEY = 'hoistle_proto_auth';
  const HASH = '4538cea5c1e0ed2970c3743bcf7b0032f8d4703ca945ed12489a83a08e1fbaf3';

  async function _digest(str) {
    const data = new TextEncoder().encode(str);
    const buf = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function isAuthenticated() {
    return sessionStorage.getItem(KEY) === '1';
  }

  async function login(password) {
    const hash = await _digest(password);
    if (hash === HASH) {
      sessionStorage.setItem(KEY, '1');
      return true;
    }
    return false;
  }

  // インデックス以外のページで未認証ならリダイレクト
  const isIndexPage = location.pathname.endsWith('/index.html') || location.pathname.endsWith('/prototype-share/');
  if (!isIndexPage && !isAuthenticated()) {
    location.replace('index.html');
  }

  return { isAuthenticated, login };
})();
