import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ChatService } from "src/app/services/chat.service";
import { UserListService } from "src/app/services/user-list.service";

@Component({
  selector: "app-lista-usuarios",
  templateUrl: "./lista-usuarios.component.html",
  styleUrls: ["./lista-usuarios.component.css"],
})
export class ListaUsuariosComponent implements OnInit {
  usuariosActivosObs: Observable<any>;

  constructor(
    public chatService: ChatService,
    public userListService: UserListService
  ) {}

  ngOnInit() {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();

    // Emitir el obtenerUsuarios
    this.userListService.getAllConnectedUsers();
  }
}
