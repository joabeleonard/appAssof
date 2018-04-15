import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Noticia } from '../../models/noticia';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { NoticiasServiceProvider } from '../../providers/noticias-service/noticias-service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public noticias: Noticia[];
  constructor(public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _noticiasService: NoticiasServiceProvider) {}

  ionViewDidLoad() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando noticias...'
    });

    loading.present();

    this._noticiasService.lista()
              .subscribe(
                (noticias) => {
                  this.noticias = noticias;
                  loading.dismiss();
                },
                (err: HttpErrorResponse) => {
                  console.log(err);

                  loading.dismiss();

                  this._alertCtrl.create({
                    title: 'Falha na conexão',
                    subTitle: 'Não foi possível carregar. Tente novamente mais tarde!',
                    buttons: [
                      { text: 'Ok' }
                    ]
                  }).present();
                }
              );
  }

  selecionaCarro(noticia: Noticia) {
    console.log(noticia);
   
  }

}
