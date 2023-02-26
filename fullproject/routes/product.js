import { Router } from "express";
import { productdelet, productget, productgetone, productpost, productupdate } from "../controllers/product.js";

const router =  Router();

router.post("/productcreate", productpost);
router.get("/productget", productget);
router.get("/productgetone/:id", productgetone);
router.put("/productupdate/:id", productupdate);
router.delete("/productdelet/:id", productdelet);

export default router;
