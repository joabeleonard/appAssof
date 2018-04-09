import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AcompanhamentoJuridicoPage } from '../pages/acompanhamento-juridico/acompanhamento-juridico';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { EstatutoPage } from '../pages/estatuto/estatuto';
import { InformacoesGeraisPage } from '../pages/informacoes-gerais/informacoes-gerais';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: HomePage },
      { title: 'Acompanhamento Juridico', component: AcompanhamentoJuridicoPage },
      { title: 'Beneficios', component: BeneficiosPage },
      { title: 'Estatuto', component: EstatutoPage },
      { title: 'Informações Gerais', component: InformacoesGeraisPage }



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
