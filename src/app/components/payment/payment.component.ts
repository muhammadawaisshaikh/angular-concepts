import { Component, OnInit } from '@angular/core';
import { PaymentProvider } from 'src/app/shared/enums/payment-provider';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentProvider: any = PaymentProvider;
  selectedPaymentMethod: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSelectPayment(method: string) {
    if (method == this.paymentProvider.VISA) {
      this.selectedPaymentMethod = this.paymentProvider.VISA;
    }
    if (method == this.paymentProvider.CREDIT_CARD) {
      this.selectedPaymentMethod = this.paymentProvider.CREDIT_CARD;
    }
    if (method == this.paymentProvider.CRYPO_CURRENCY) {
      this.selectedPaymentMethod = this.paymentProvider.CRYPO_CURRENCY;
    }
  }

}
