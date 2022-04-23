import { Router } from "express";
import Pass from "./database/Pass.js";
import Email from "./database/Email.js";
import Cpf from "./database/Cpf.js";

const router = Router();


//////////////////////////////////////////////////////////////////////////////////////// ROUTES ///////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/pass', (req, res) => {
  const pass = Number(req.body.carac);
  const newPass = Pass.generatePass(pass);
  res.json(newPass);
});

router.post('/email', (req, res) => {
  const email = req.body;
  const newEmail = Email.create(email);
  res.json(newEmail);
});

router.post('/cpf', (req, res) => {
  const cpf = req.body.mascara;
  const newCPF = Cpf.create(cpf);
  res.json(newCPF);
});

export default router;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////