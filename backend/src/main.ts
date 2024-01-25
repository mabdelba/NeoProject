import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: 'http://localhost:4000',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true, // This allows cookies to be sent in cross-origin requests
  });
  await app.listen(8000);
}
bootstrap();
