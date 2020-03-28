import { ToastController } from '@ionic/angular';

abstract class Toast {
  constructor(private toastController: ToastController) { }

  async newToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}