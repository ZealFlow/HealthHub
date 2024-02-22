import redis from 'redis';

const redisClient = redis.createClient({
    url: 'redis://alice:foobared@awesome.redis.server:6380'
});

export default redisClient;