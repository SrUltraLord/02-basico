import { Injectable } from "@angular/core";
import { WebsocketService } from "./websocket.service";

@Injectable({
  providedIn: "root",
})
export class UserListService {
  constructor(public wsService: WebsocketService) {}

  getAllConnectedUsers() {
    this.wsService.emit("obtener-usuarios");
  }
}
