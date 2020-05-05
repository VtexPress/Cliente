import { Injectable } from "@angular/core";
import { Api } from "../api/api";
import { StorageProvider } from "../storage/storage";
import { DatabaseProvider } from "../database/database";

@Injectable()
export class User {
  constructor(
    public storage: StorageProvider,
    public api: Api,
    public database: DatabaseProvider
  ) {}

  /**
   * envia os dados do usuário para criação de uma conta na aplicação
   * @param account dados da conta
   */
  registerUser(account) {
    // return new Promise((resolve, reject) => {
    //   this.api.post("users/register", account).subscribe(
    //     (result: any) => {
    //       resolve(result);
    //     },
    //     (error) => {
    //       reject(error);
    //     }
    //   );
    return this.login(account);
    // });
  }

  /**
   * faz o login do usuário na aplicação
   * @param account dados da conta
   */
  login(account) {
    return new Promise((resolve, reject) => {
      // this.api.post("users/login", account).subscribe(
      //   (result: any) => {
      //     resolve(result);
      //   },
      //   (error) => {
      //     reject(error);
      //   }
      // );
      account.email == this.database.credentials.deliveryMan.email &&
      account.password === this.database.credentials.deliveryMan.password
        ? resolve({ token: "token_maroto" })
        : reject({ error: "Dados inválidos" });
    });
  }
  /**
   * busca os dados do usuário na api
   */
  getUserData() {
    return new Promise((resolve, reject) => {
      this.api.get("users/verify").subscribe(
        (result: any) => {
          resolve(result.user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  updateUser(payload) {
    return new Promise((resolve, reject) => {
      this.api.put("users/update", payload).subscribe(
        (result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  /**
   * registra os dados do usário em local storage
   * @param user usuário
   */
  saveUserData(user) {
    if (user.purchases) user.purchases = user.purchases.lenght;
    this.storage.setUserData(user);
  }

  /**
   * retorna os dados do usuário em local storage
   */
  getLocalUserData() {
    return this.storage.getUserData();
  }
  /**
   * registra o token do usário em local storage
   * @param token token a ser salvo
   */
  saveUserToken(token: string) {
    this.storage.setUserToken(token);
  }

  /**
   * retorna o token do usuário salvo em local storage
   */
  getLocalUserToken() {
    return this.storage.getUserToken();
  }
}
