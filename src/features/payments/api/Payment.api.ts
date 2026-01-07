import type { Payment, PaymentPage } from "../types/Payment.types";
import {
  mapApiResponseToPaymentPage,
  mapApiToPayment,
} from "./Payment.mappers";
import type { PaymentApi, PaymentPageApi } from "../types/Payment.api.types";
import { httpGetClient } from "../../common/api/httpClient";

export async function fetchPayments(): Promise<PaymentPage> {
  const response: PaymentPageApi =
    await httpGetClient<PaymentPageApi>("/payments");

  return mapApiResponseToPaymentPage(response);
}

export async function fetchPaymentById(paymentId: string): Promise<Payment> {
  const response: PaymentApi = await httpGetClient<PaymentApi>(
    `/payment/${paymentId}`,
  );

  return mapApiToPayment(response);
}
