const config = (() => {
    const PORT = process.env.PORT || 3001;
    const JWT_SECRET = 'secret';
    const JWT_EXPIRE_TIME = 11200; //sec
    const BCRYPT_SALT_ROUNDS = 4;

    return {
        PORT,
        JWT_SECRET,
        JWT_EXPIRE_TIME,
        BCRYPT_SALT_ROUNDS
    }
})();

module.exports = {
    PORT: config.PORT,
    JWT_SECRET: config.JWT_SECRET,
    JWT_EXPIRE_TIME: config.JWT_EXPIRE_TIME ,
    BCRYPT_SALT_ROUNDS: config.BCRYPT_SALT_ROUNDS,
};