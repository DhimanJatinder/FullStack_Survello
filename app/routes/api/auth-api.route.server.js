import { Router } from "express";
import {
  processLogin,
  processRegistration,
  processLogout,
  processGet,
  processModify,
} from "../../controllers/api/auth-api.controller.server.js";

const router = Router();

router.post("/login", processLogin);
router.post("/register", processRegistration);
router.get("/logout", processLogout);
router.get("/:id", processGet);
router.put("/modify/:id", processModify);

export default router;
