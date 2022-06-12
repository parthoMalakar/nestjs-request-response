import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { RequestServices } from './services/request.servies';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestServices],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes({ path : '/', method : RequestMethod.GET });
  }
}
