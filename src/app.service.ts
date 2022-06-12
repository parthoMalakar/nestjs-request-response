import { Injectable, Logger } from '@nestjs/common';

import { RequestServices } from './services/request.servies';

@Injectable()
export class AppService {
  constructor(private readonly requestservices : RequestServices) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    const userId = this.requestservices.getUserId();    
    this.logger.log('Get userId from request servieces', userId);
    return 'Hello World!';
  }
}
