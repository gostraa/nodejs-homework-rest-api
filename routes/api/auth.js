const express = require("express");

const ctrl = require("../../controllers/auth");

const router = express.Router();
const { validateBody } = require("../../middlewares/validateBody");
const authenticator = require("../../middlewares/authenticator");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticator, ctrl.logout);

router.get("/current", authenticator, ctrl.getCurrent);

module.exports = router;
