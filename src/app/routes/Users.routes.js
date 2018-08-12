import express from 'express';
import User from '../models/User.model';

const router = express.Router();

router.get('/', async (req, res) => {
  User.find({}).then((users) => res.send(users))
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  User.find({_id: id})
    .then((user) => res.send(user))
});

router.put('/:id', async (req, res) => {
  const userUpdated = req.body;
  User.update({ _id: userUpdated._id }, { $set: userUpdated })
    .then(result => res.send(result));
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  User.remove({ _id: id })
    .then(result => res.send(result))
})
export default router;
