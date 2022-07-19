import Cookies from 'js-cookie';

const cookieUtils = {
  getCookie: key => Cookies.get(key),

  setCookie: (key, value) => {
    Cookies.set(key, value, {
      path: '/',
      domain:
        window.location.hostname.indexOf('vndirect.com.vn') >= 0
          ? '.vndirect.com.vn'
          : '',
      secure: window.location.protocol === 'https:',
    });
  },

  removeCookie: key => {
    Cookies.remove(key, {
      path: '/',
      domain:
        window.location.hostname.indexOf('vndirect.com.vn') >= 0
          ? '.vndirect.com.vn'
          : '',
      secure: window.location.protocol === 'https:',
    });
  },
};

export default cookieUtils;
