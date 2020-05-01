import { Injectable } from '@angular/core';










import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertCtrl: AlertController,
  ) {
  }

  async ctrl(m?) {
    let message; 
    let header = (m.header == false || m.h == false)?null:'Notification';
    if(!m.message && !m.inputs && m.length){
      message = m;
    } else {
      message = m.message || null;
    }
    if(typeof message === 'string' || message instanceof String){
      message = message.replace(/<br>/g,'');
    }
    return await this.alertCtrl.create({
      cssClass: m.cssClass || 'alertCtrl',
      header: m.header || header,
      subHeader: m.subHeader || null,
      message: message || null,
      ...(m.inputs)?{inputs: m.inputs}: null,
      buttons: m.buttons || ['Okay'],
      backdropDismiss: m.backdropDismiss || null
    });
  }

  async confirm(m?) {
    let result = false;
    let p:any = (m.length)?{header:m}:{...m};
    p.buttons = [
      {
        text: 'No',
        handler: () => {
          result = false;
        }
      },
      {
        text: 'Yes',
        handler: () => {
          result = true;
        }
      }
    ]
    p.backdropDismiss = false;
    const alert = await this.ctrl(p);
    await alert.present();
    let r = await alert[m.then || 'onDidDismiss']();
    return result;
  }

  async show(m?) {
    const alert = await this.ctrl(m);
    await alert.present();
    let r = await alert[m.then || 'onDidDismiss']();
    return r.data;
  }

  check(data) {
    let obj = data; let msg = "";
    if(obj instanceof String 
    || typeof obj === 'string'){
      msg = String(obj);
    } else {
      msg = JSON.stringify(obj);
    }
    this.show(msg);
  }

  log(data){
    // console.log(data);
    return this.check(data);
  }

  comingSoon() {
    this.show("Still under construction. Coming soon!");
  }
    
}










import { LoadingController } from '@ionic/angular';
  
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loadingCtrl: LoadingController,
  ) { }

  async ctrl(i?: any) {
    i = (i)?i:{};
    return await this.loadingCtrl.create({
      message: i.message || i || 'Loading...',
      spinner: i.spinner,
      duration: i.duration,
    });
  }

  async show(i?: any) {
    const loading = await this.ctrl(i);
    await loading.present();
    let r = await loading[i.then || 'onDidDismiss']();
    return r.data;
  }

  l: any = {};

  async present(i?: any) {
    i = (i)?i:{}; if(i.prop){
      i.message = i.message || 'Loading...'
    }
    this.l[i.prop || 'view'] = await this.ctrl(i);
    await this.l[i.prop || 'view'].present()
  }

  async setContent(i?: any) {
    i = (i)?i:{};
    if(this.loadingCtrl.getTop() 
    && this.l[i.prop || 'view']){
      for(const p in i){
          this.l[i.prop || 'view'][p] = i[p];
      }
    } else{
      await this.present(i)
    }
  }

  dismiss(prop?) {
    if(this.loadingCtrl.getTop() || this.l[prop || 'view'])
    return this.l[prop || 'view'].dismiss()
  }
  
}










import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastCtrl: ToastController,
  ) { }
    
  async ctrl(i?: any) {
    i = (i)?i:{};
    return await this.toastCtrl.create({
      message: i.message || i || 'Complete',
      duration: i.duration || 1000,
      showCloseButton: i.showCloseButton || true,
      position: i.position || 'bottom',
      closeButtonText: i.closeButtonText,
      translucent: i.translucent || true
    });
  }
  
  async show(i?: any) {
    const toast = await this.ctrl(i);
    await toast.present();
    let r = await toast[i.then || 'onDidDismiss']();
    return r.data;
  }

}










import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalCtrl: ModalController
  ) { 
  }

  async ctrl(view: any) {
    view.componentProps = {
      ...view.componentProps,
      ...(view.items)?{items: view.items}:null,
      ctrl: this.modalCtrl
    }
    return await this.modalCtrl.create(view);
  }

  async show(view: any) {
    const modal = await this.ctrl(view);
    await modal.present();
    let r = await modal[view.then || 'onDidDismiss']();
    return r.data;
  }
    
}










import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  
  constructor(
    public popCtrl: PopoverController
  ) {
  }
  
  async ctrl(view: any, ev?: any) {
    view.componentProps = {
      ...view.componentProps,
      ...(view.items)?{items: view.items}:null,
      ctrl: this.popCtrl
    }
    view.translucent = view.translucent || false;
    view.event = view.event || ev;
    return await this.popCtrl.create(view);
  } 
  
  async show(view: any, ev?: any) {
    const popover = await this.ctrl(view, ev);
    await popover.present();
    let r = await popover[view.then || 'onDidDismiss']();
    return r.data;
  }
    
}