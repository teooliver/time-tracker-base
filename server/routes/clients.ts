import express from 'express';
import { getClients, createClient, deleteClient } from '../controllers/clients';

const router = express.Router();

router.get('/', getClients);
router.post('/', createClient);
// router.patch("/:id", updateProject);
router.delete('/:id', deleteClient);

export default router;
