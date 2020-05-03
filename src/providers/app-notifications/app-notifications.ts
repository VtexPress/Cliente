import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";

@Injectable()
export class AppNotificationsProvider {
  constructor(public toastCtrl: ToastController) {
    console.log("Hello AppNotificatonsProvider Provider");
  }

  /**
   * exibe um balão flutuante com uma mensagem ao usuário
   * @param message mensagem a ser exibida
   */
  showToast(message) {
    this.toastCtrl.create({ duration: 3000, message }).present();
  }
}
