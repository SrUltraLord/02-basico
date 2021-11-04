import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { WebsocketService } from "../services/websocket.service";

@Injectable({
  providedIn: "root",
})
export class UsuarioGuard implements CanActivate {
  constructor(public wsService: WebsocketService, private router: Router) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(): boolean {
    if (this.wsService.getusuario()) {
      return true;
    }

    this.router.navigateByUrl("/");
    return false;
  }
}
