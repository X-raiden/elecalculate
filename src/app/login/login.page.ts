import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:String;
  password:String;
  constructor(private router: Router, private alertController : AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cannot login',
      subHeader: 'Typing errors',
      message: 'Email or Password is invalide',
      buttons: ['OK']
    });

    await alert.present();
  }

  login(){
    if((this.email == null && this.password==null) || (this.email == "" || this.password=="")){
      this.presentAlert();
    }else if(this.email=="ayoub.errkhis@usms.ac.ma" && this.password=="Errkhis@1998") {
      this.router.navigateByUrl('/tabs');
    }
  }

}
