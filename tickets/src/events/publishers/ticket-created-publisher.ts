import { Publisher, Subjects, TicketCreatedEvent } from '@dlyctickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

