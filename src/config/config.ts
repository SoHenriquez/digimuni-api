import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            name: process.env.MONGODB,
            port: process.env.PORT,
        },
        apiKey: process.env.API_KEY,
    };
});
