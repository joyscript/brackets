module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let config = {};
  for (let item of bracketsConfig) config[item[0]] = item[1];

  for (let bracket of str) {
    if (!arr.length && !(bracket in config)) return false;
    if (arr.length && config[arr.at(-1)] == bracket) {
      arr.pop();
    } else if (bracket in config) {
      arr.push(bracket);
    }
  }

  return arr.length == 0;
};
