import { Router } from "express";
import Pass from "../models/Pass.js";
import Email from "../models/Email.js";
import Cpf from "../models/Cpf.js";
import Domain from "../models/Domain.js"

const router = Router();

//////////////////////////////////////////////////////////////////////////////////////// ROUTES ///////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/pass', async (req, res) => {
  const pass = Number(req.body.carac);
  const newPass = await Pass.generatePass(pass);
  res.json(newPass);
});

router.post('/email', async (req, res) => {
  const email = req.body;
  console.log(email)
  const newEmail = await Email.create(email);
  res.json(newEmail);
});

router.get('/domains', async (req, res) => {
  const domains = await Domain.readAll();
  res.json(domains);
});

router.post('/cpf', async (req, res) => {
  const cpf = req.body.mascara;
  const newCPF = await Cpf.create(cpf);
  res.json(newCPF);
});

export default router;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////