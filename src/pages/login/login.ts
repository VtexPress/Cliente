import { Component } from "@angular/core";

import { IonicPage, NavController, LoadingController } from "ionic-angular";

import { User } from "../../providers";
import { MainPage } from "../";
import { AppNotificationsProvider } from "../../providers/app-notifications/app-notifications";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatabaseProvider } from "../../providers/database/database";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  form: FormGroup;
  loader = this.loadingCtrl.create({
    content: "Validando credencias...",
  });

  constructor(
    public navCtrl: NavController,

    public notifications: AppNotificationsProvider,
    public user: User,
    public database: DatabaseProvider,
    public loadingCtrl: LoadingController,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      email: [database.credentials.deliveryMan.email, Validators.required],
      password: [
        database.credentials.deliveryMan.password,
        Validators.required,
      ],
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  async doLogin() {
    if (!this.form.valid) {
      this.notifications.showToast("Preencha todos os campos corretamente");
      return;
    } else {
      this.loader.present();

      await this.user
        .login(this.form.value)
        .then((result: any) => {
          this.notifications.showToast("Bem vindo :)");
          this.user.saveUserToken(result.token);
          this.navCtrl.setRoot(MainPage);
        })
        .catch((error: any) => this.notifications.showToast(error.error));
      this.loader.dismiss();
    }
  }

  goBack() {
    this.navCtrl.pop();
  }
  forgotPassword() {}
  register() {
    this.navCtrl.push("SignupPage");
  }
}
