/**
 * This module contains various functions that can be
 * used to operate on cookies
 * @module cookie
 */

import cookie from 'js-cookie';

/**
 * Set a cookie with the given key and value.
 * @param {string} key - The key of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {object} [options] - Optional cookie options.
 */
export const setCookie = (key: string, value: string, options: object = {}) => {
    cookie.set(key, value, options)
};

/**
 * Get the value of a cookie by its key.
 * @param {string} key - The key of the cookie.
 * @returns {string|undefined} The value of the cookie, or undefined if not found.
 */
export const getCookie = (key: string): string | undefined => {
  return cookie.get(key);
};

/**
 * Remove a cookie by its key.
 * @param {string} key - The key of the cookie to remove.
 */
export const removeCookie = (key: string) => {
    cookie.remove(key);
};