import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 4001;
  await app.listen(PORT, () => {
    console.log(`SERVER RUNNNING ON PORT :: ${PORT}`);
  });
}
bootstrap();
