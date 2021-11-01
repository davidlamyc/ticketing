import { Publisher, OrderCancelledEvent, Subjects } from '@dlyctickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled= Subjects.OrderCancelled;
}