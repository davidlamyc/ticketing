import { Publisher, OrderCreatedEvent, Subjects } from '@dlyctickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}