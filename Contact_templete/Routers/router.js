import express from "express";
const router = express.Router();
import {
  home,
  show_contact,
  add_contact,
  add_contact_data,
  update_contact,
  update_contact_data,
  delete_contact,
} from "../controller/contact.controller.js";

router.get("/", home);

router.get("/show-contact/:id", show_contact);

router.get("/add-contact", add_contact);

router.post("/add-contact", add_contact_data);

router.get("/update-contact/:id", update_contact);

router.post("/update-contact/:id", update_contact_data);

router.get("/delete-contact/:id", delete_contact);

export default router;
