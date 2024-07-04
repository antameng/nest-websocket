import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { WsStartGateway } from '../ws.gateway';

@Module({
  imports: [AaaModule],
  controllers: [AppController],
  providers: [AppService,WsStartGateway],
})
export class AppModule {}
