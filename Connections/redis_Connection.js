const redis = require("redis");
const redisClient = redis.createClient({
    url:'redis://localhost:6379'
})

redisClient.on('connect',()=>console.log('Connected to Redis ✅'));
redisClient.on('error', (err) => console.error('Redis Error ❌:', err));


async function getRedisConnection() {
    if(!redisClient.isOpen){
        await redisClient.connect();
    }
    return redisClient;
}

module.exports.getRedisConnection = getRedisConnection;