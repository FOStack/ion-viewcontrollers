import { AlertController } from '@ionic/angular';
export declare class AlertService {
    alertCtrl: AlertController;
    constructor(alertCtrl: AlertController);
    ctrl(m?: any): Promise<HTMLIonAlertElement>;
    confirm(m?: any): Promise<boolean>;
    show(m?: any): Promise<any>;
    check(data: any): void;
    log(data: any): void;
    comingSoon(): void;
}
import { LoadingController } from '@ionic/angular';
export declare class LoadingService {
    loadingCtrl: LoadingController;
    constructor(loadingCtrl: LoadingController);
    ctrl(i?: any): Promise<HTMLIonLoadingElement>;
    show(i?: any): Promise<any>;
    l: any;
    present(i?: any): Promise<void>;
    setContent(i?: any): Promise<void>;
    dismiss(prop?: any): any;
}
import { ToastController } from '@ionic/angular';
export declare class ToastService {
    toastCtrl: ToastController;
    constructor(toastCtrl: ToastController);
    ctrl(i?: any): Promise<HTMLIonToastElement>;
    show(i?: any): Promise<any>;
}
import { ModalController } from '@ionic/angular';
export declare class ModalService {
    modalCtrl: ModalController;
    constructor(modalCtrl: ModalController);
    ctrl(view: any): Promise<HTMLIonModalElement>;
    show(view: any): Promise<any>;
}
import { PopoverController } from '@ionic/angular';
export declare class PopoverService {
    popCtrl: PopoverController;
    constructor(popCtrl: PopoverController);
    ctrl(view: any, ev?: any): Promise<HTMLIonPopoverElement>;
    show(view: any, ev?: any): Promise<any>;
}
