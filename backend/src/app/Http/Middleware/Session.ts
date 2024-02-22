import session from 'express-session';
import RedisStore from 'connect-redis';
import redisClient from '../../../config/redis';

redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
    client: redisClient,
});


export default session({
    secret: 'secret',
    store: redisStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 5 * 60 * 1000
    }
});
