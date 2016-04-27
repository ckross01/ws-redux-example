module.exports = function toAction(message, dispatch) {
  try {
    var event = JSON.parse(message);
    dispatch(event);
  } catch (err) {
  }
};
