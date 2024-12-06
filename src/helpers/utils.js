const GMTHOUR = 8;

var utils = {
  /**
   * 檢查property是否存在
   * @param {Object} obj 檢查物件
   * @param {string} property 屬性名稱
   * @returns {boolean} 物件是否用有該屬性
   */
  hasProperty: function (obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
  },

  /**
   * 檢查物件是否為空
   * @param {Object} obj 檢查物件
   * @returns {boolean} 物件是否為空
   */
  isEmpty: function (obj) {
    if (obj == null) return true;
    if (obj === undefined) return true;
    if (/^\d+$/.test(obj)) return false;
    if (Object.keys(obj).length === 0 && obj.constructor === Object) return true;
    if (typeof obj !== 'object') return true;
    if (Array.isArray(obj) && obj.length === 0) return true;
    if (/^\s*$/.test(obj)) return true;
    return false;
  },

  /**
   * 檢查物件是否為空
   * @param {Object} obj 檢查物件
   * @returns {boolean} 物件是否不為空
   */
  isNotEmpty: function (obj) {
    return !utils.isEmpty(obj);
  },

  /**
   * 檢查字串是否為空 blank or null or undefined
   * @param {string} str 檢查字串
   * @returns {boolean} 字串是否為空
   */
  isBlank: function (str) {
    if (str == null) return true;
    if (str === undefined) return true;
    if (str === 'undefined') return true;
    return !str || /^\s*$/.test(str);
  },

  /**
   * 檢查字串是否不為空 blank or null or undefined
   * @param {string} str 檢查字串
   * @returns {boolean} 字串是否不為空
   */
  isNotBlank: function (str) {
    return !utils.isBlank(str);
  },

  /**
   * 檢查字串是否相同
   * @param {string} str1 比較字串1
   * @param {string} str2 比較字串2
   * @returns {boolean} 字串是否相等
   */
  equals: function (str1, str2) {
    return str1 !== null && str2 !== null && str1.equals(str2);
  },

  /**
   * 檢查字串是否不相同
   * @param {string} str1 比較字串1
   * @param {string} str2 比較字串2
   * @returns {boolean} 字串是否不相同
   */
  notEquals: function (str1, str2) {
    return !utils.equals(str1, str2);
  },
};

module.exports = utils;
