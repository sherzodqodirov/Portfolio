import express from "express";
import { Router } from "express";
import path from "path";
import { createPlane, getplanes, getsinglplane } from "../controllers/plane.js";
import multer from "multer";
const router=Router();

const storage=multer.diskStorage({
    destination:"./assets/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
})

const upload=multer({storage})

router.get("/",getplanes)
router.get("/:id",getsinglplane)
router.post("/",upload.single("planeImg"),createPlane)

export default router;