import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
let AlertService = class AlertService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ctrl(m) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let message;
            let header = (m.header == false || m.h == false) ? null : 'Notification';
            if (!m.message && !m.inputs && m.length) {
                message = m;
            }
            else {
                message = m.message || null;
            }
            if (typeof message === 'string' || message instanceof String) {
                message = message.replace(/<br>/g, '');
            }
            return yield this.alertCtrl.create(Object.assign({ cssClass: m.cssClass || 'alertCtrl', header: m.header || header, subHeader: m.subHeader || null, message: message || null }, (m.inputs) ? { inputs: m.inputs } : null, { buttons: m.buttons || ['Okay'], backdropDismiss: m.backdropDismiss || null }));
        });
    }
    confirm(m) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let result = false;
            let p = (m.length) ? { header: m } : Object.assign({}, m);
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
            ];
            p.backdropDismiss = false;
            const alert = yield this.ctrl(p);
            yield alert.present();
            let r = yield alert[m.then || 'onDidDismiss']();
            return result;
        });
    }
    show(m) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.ctrl(m);
            yield alert.present();
            let r = yield alert[m.then || 'onDidDismiss']();
            return r.data;
        });
    }
    check(data) {
        let obj = data;
        let msg = "";
        if (obj instanceof String
            || typeof obj === 'string') {
            msg = String(obj);
        }
        else {
            msg = JSON.stringify(obj);
        }
        this.show(msg);
    }
    log(data) {
        // console.log(data);
        return this.check(data);
    }
    comingSoon() {
        this.show("Still under construction. Coming soon!");
    }
};
AlertService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AlertService_Factory() { return new AlertService(i0.ɵɵinject(i1.AlertController)); }, token: AlertService, providedIn: "root" });
AlertService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController])
], AlertService);
export { AlertService };
import { LoadingController } from '@ionic/angular';
let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.l = {};
    }
    ctrl(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            i = (i) ? i : {};
            return yield this.loadingCtrl.create({
                message: i.message || i || 'Loading...',
                spinner: i.spinner,
                duration: i.duration,
            });
        });
    }
    show(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = yield this.ctrl(i);
            yield loading.present();
            let r = yield loading[i.then || 'onDidDismiss']();
            return r.data;
        });
    }
    present(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            i = (i) ? i : {};
            if (i.prop) {
                i.message = i.message || 'Loading...';
            }
            this.l[i.prop || 'view'] = yield this.ctrl(i);
            yield this.l[i.prop || 'view'].present();
        });
    }
    setContent(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            i = (i) ? i : {};
            if (this.loadingCtrl.getTop()
                && this.l[i.prop || 'view']) {
                for (const p in i) {
                    this.l[i.prop || 'view'][p] = i[p];
                }
            }
            else {
                yield this.present(i);
            }
        });
    }
    dismiss(prop) {
        if (this.loadingCtrl.getTop() || this.l[prop || 'view'])
            return this.l[prop || 'view'].dismiss();
    }
};
LoadingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.LoadingController)); }, token: LoadingService, providedIn: "root" });
LoadingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController])
], LoadingService);
export { LoadingService };
import { ToastController } from '@ionic/angular';
let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ctrl(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            i = (i) ? i : {};
            return yield this.toastCtrl.create({
                message: i.message || i || 'Complete',
                duration: i.duration || 1000,
                showCloseButton: i.showCloseButton || true,
                position: i.position || 'bottom',
                closeButtonText: i.closeButtonText,
                translucent: i.translucent || true
            });
        });
    }
    show(i) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.ctrl(i);
            yield toast.present();
            let r = yield toast[i.then || 'onDidDismiss']();
            return r.data;
        });
    }
};
ToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ToastService_Factory() { return new ToastService(i0.ɵɵinject(i1.ToastController)); }, token: ToastService, providedIn: "root" });
ToastService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController])
], ToastService);
export { ToastService };
import { ModalController } from '@ionic/angular';
let ModalService = class ModalService {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ctrl(view) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            view.componentProps = Object.assign({}, view.componentProps, (view.items) ? { items: view.items } : null, { ctrl: this.modalCtrl });
            return yield this.modalCtrl.create(view);
        });
    }
    show(view) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.ctrl(view);
            yield modal.present();
            let r = yield modal[view.then || 'onDidDismiss']();
            return r.data;
        });
    }
};
ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ModalController)); }, token: ModalService, providedIn: "root" });
ModalService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], ModalService);
export { ModalService };
import { PopoverController } from '@ionic/angular';
let PopoverService = class PopoverService {
    constructor(popCtrl) {
        this.popCtrl = popCtrl;
    }
    ctrl(view, ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            view.componentProps = Object.assign({}, view.componentProps, (view.items) ? { items: view.items } : null, { ctrl: this.popCtrl });
            view.translucent = view.translucent || false;
            view.event = view.event || ev;
            return yield this.popCtrl.create(view);
        });
    }
    show(view, ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.ctrl(view, ev);
            yield popover.present();
            let r = yield popover[view.then || 'onDidDismiss']();
            return r.data;
        });
    }
};
PopoverService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PopoverService_Factory() { return new PopoverService(i0.ɵɵinject(i1.PopoverController)); }, token: PopoverService, providedIn: "root" });
PopoverService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [PopoverController])
], PopoverService);
export { PopoverService };
//# sourceMappingURL=ctrl.service.js.map