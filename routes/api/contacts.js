const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();

const { validateBody } = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidId");
const authenticator = require("../../middlewares/authenticator");

const { schemas } = require("../../models/contact");

router.get("/", authenticator, ctrl.getList);

router.get("/:id", authenticator, ctrl.getById);

router.post(
  "/",
  authenticator,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:id", authenticator, isValidId, ctrl.deleteContact);

router.patch(
  "/:id/favorite",
  authenticator,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.put(
  "/:id",
  authenticator,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
