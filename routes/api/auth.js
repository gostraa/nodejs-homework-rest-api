const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();
const { validateBody } = require("../../middlewares/validateBody");
const authenticator = require("../../middlewares/authenticator");
const { schemas } = require("../../models/user");
const upload = require("../../middlewares/upload");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticator, ctrl.logout);

router.get("/current", authenticator, ctrl.getCurrent);

router.patch(
  "/avatars",
  authenticator,
  upload.single("avatar"),
  ctrl.updateAvatar
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.sendVerify);

module.exports = router;
