/**
 * Builds an error based on http status and error text
 * @param {response} res - Response to REST call. Need in function in order to send response back to client.
 * @param {HTTPStatus} status - HTTP status relating to the error being handled
 * @param {Error} error - Error being thrown and caught
 * @param {string} errorText - Text of error being thrown
 */
exports.requestError = function(res, status, error, errorText) {
  if (error || !error.length === 0) {
    console.error("Error:", error);
  }

  res.status(status).send({
    error: true,
    errorText: errorText,
    data: null
  });
};

/**
 * Builds an response based on http status and data
 * @param {response} res - Response to REST call. Need in function in order to send response back to client.
 * @param {HTTPStatus} status - HTTP status
 * @param {object} data - Data being returned to client
 */
exports.requestSuccessful = function(res, status, data) {
  res.status(status).send({ error: false, errorText: null, data: data });
};
