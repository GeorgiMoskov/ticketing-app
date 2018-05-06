    const PORT = process.env.PORT || 3001;
    const JWT_SECRET = 'secret';
    const JWT_EXPIRE_TIME = 1120000; //sec
    const BCRYPT_SALT_ROUNDS = 4;

    module.exports = {
        PORT,
        JWT_SECRET,
        JWT_EXPIRE_TIME,
        BCRYPT_SALT_ROUNDS
    }
