import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import * as WebSocket from 'ws';
@WebSocketGateway(3002)
export class WsStartGateway {
  @SubscribeMessage('hello')
  hello(@MessageBody() data: any): any {
    return {
      event: 'hello',
      data: data,
      msg: 'rustFisher.com',
    };
  }

  // 新增加一个消息订阅方法。
  @SubscribeMessage('hello2')
  hello2(@MessageBody() data: any, @ConnectedSocket() client: WebSocket): any {
    console.log('收到消息 client', client);
    client.send(JSON.stringify({ event: 'tmp', data: '这里是个临时信息' }));
    return {
      event: 'hello2',
      data: data,
      msg: 'rustFisher123.com',
    };
  }
}
