import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'
@WebSocketGateway()
export class ChatMessagesGateway {
  server: Server; // 전체 클라이언트에 메시지 보내기

  // 서버 시작 시 실행
  afterInit(server: Server) {
    console.log("WebSocket 서버 초기화 완료!");
  }

  // 클라이언트가 연결될 때 실행
  handleConnection(client: Socket) {
    console.log(`클라이언트 연결됨: ${client.id}`);
  }

  // 클라이언트가 연결 해제될 때 실행
  handleDisconnect(client: Socket) {
    console.log(`클라이언트 연결 해제됨: ${client.id}`);
  }

  @SubscribeMessage('chatMessage')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
