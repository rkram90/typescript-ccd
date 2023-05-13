import { TicketSchema } from "../interface/";

export class Main {

    constructor(private ticketInfo: TicketSchema[]){}

    render():string {
        return `
            <div>
                <table class="table table-striped table-bordered">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <tbody>
                            ${this.ticketInfo.map( ticket => `
                                <tr>
                                    <td> ${ticket.concertName}</td>
                                    <td> ${ticket.price}</td>
                                    <td> ${ticket.quantity}</td>
                                </tr>
                            `
                            ).join("")}
                        </tbody>
                    </thead>
                </table>
            </div>
        `
    }
}