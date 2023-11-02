const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();

const { validateBody } = require("../../middlewares/validateBody");
const isValidId = require("../../middlewares/isValidId");

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getList);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.deleteContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
