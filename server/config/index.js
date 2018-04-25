const config = (() => {
    const PORT = process.env.PORT || 3001;
    const JWT_SECRET = 'secret';
    const JWT_EXPIRE_TIME = 120;
    const BCRYPT_SALT_ROUNDS = 10;

    return {
        PORT,
        JWT_SECRET,
        JWT_EXPIRE_TIME
    }
});

module.exports = {
    PORT: config.PORT,
    JWT_SECRET: config.JWT_SECRET,
    JWT_EXPIRE_TIME: config.JWT_EXPIRE_TIME ,
    BCRYPT_SALT_ROUNDS: config.BCRYPT_SALT_ROUNDS,
};