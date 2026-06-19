const bcrypt = require('bcrypt');

export const bcryptHash = (password: string) =>
  new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  });

export const hashPassword = async (password: string) => {
  if (!password) {
    return false;
  }
  const hash = await bcryptHash(password);
  return hash;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  if (!password || !hashedPassword) {
    return false;
  }
  return bcrypt.compare(password, hashedPassword);
};
