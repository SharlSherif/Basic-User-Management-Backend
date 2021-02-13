import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseModule = MongooseModule.forRootAsync({
  useFactory: async () => {
    const dbUri = "mongodb://localhost:27017/user-managment-system"

    console.log(`Attempting connection to ${dbUri}`);
    return {
      uri: dbUri,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    };
  }
});
