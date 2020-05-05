import { Component } from "@angular/core";
import { IonicPage, NavController, LoadingController } from "ionic-angular";

import { User } from "../../providers";
import { AppNotificationsProvider } from "../../providers/app-notifications/app-notifications";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MainPage } from "..";
import { DatabaseProvider } from "../../providers/database/database";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage {
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
      name: ["", Validators.required],
      age: ["", Validators.required],
      RG: ["", Validators.required],
      CNH: ["", Validators.required],
    });
  }
  async doSignup() {
    if (!this.form.valid) {
      this.notifications.showToast("Preencha todos os campos corretamente");
      return;
    } else {
      this.loader.present();

      await this.user
        .registerUser(this.form.value)
        .then((result: any) => {
          this.notifications.showToast("Bem vindo :)");
          this.user.saveUserToken(result.token);
          this.navCtrl.setRoot(MainPage);
        })
        .catch((error: any) => this.notifications.showToast(error.error));
      this.loader.dismiss();
    }
  }
}
