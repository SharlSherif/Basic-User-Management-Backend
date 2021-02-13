import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({origin:"*",methods:"GET,PATCH,POST,DELETE,OTPIONS"})
  await app.listen(3000);
  console.log("Listening on port 3000")
}
bootstrap();
