const { validateBody } = require("./validateBody");
const isValidId = require("./isValidId");
const authenticator = require("./authenticator");
const upload = require("./upload");
module.exports = {
  validateBody,
  isValidId,
  authenticator,
  upload,
};
