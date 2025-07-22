import * as userService from '../services/user.service.js';

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};
