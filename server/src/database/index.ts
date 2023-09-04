import { connect, ConnectOptions } from 'mongoose';
import { DB_URL } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: DB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  };

  await connect(dbConfig.url, dbConfig.options as ConnectOptions);
}
