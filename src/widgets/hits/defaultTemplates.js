module.exports = {
  empty: 'No results',
  item: function(data) {
    return JSON.stringify(data, null, 2);
  }
};
