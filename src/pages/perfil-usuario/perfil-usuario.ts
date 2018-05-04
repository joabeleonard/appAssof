import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Camera } from '@ionic-native/camera';
import { normalizeURL } from 'ionic-angular/util/util';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


/**
 * Generated class for the PerfilUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {

  
  fileTransfer: FileTransferObject = this.transfer.create();
  
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
    private _usuariosService: UsuariosServiceProvider,
    private _camera: Camera,
    private transfer: FileTransfer, private file: File) {
  }

 
  tiraFoto() {
    this._camera.getPicture({
      destinationType: this._camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: true,
      correctOrientation: true
    })
    .then(fotoUri => {
      fotoUri = normalizeURL(fotoUri);
      this._usuariosService.salvaAvatar(fotoUri);
    })
    .catch(err => console.log(err));
  }

  get avatar() {
    return this._usuariosService.obtemAvatar();
  }

  get usuarioLogado() {
    return this._usuariosService.obtemUsuarioLogado();
  }

  downloadRequerimento(){
    this.fileTransfer.download("assets/file/Estatuto_assof.pdf", this.file.dataDirectory+ 'requerimento.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
}
