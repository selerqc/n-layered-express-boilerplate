import bcrypt from 'bcrypt';

export const hashPassword = async (plain) => bcrypt.hash(plain, 10);
