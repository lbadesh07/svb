import express from "express";
import storeClientsData from "../controllers/clientController.js"; 

const router = express.Router();
router.post("/clientRequest", storeClientsData);

export default router; 
