function solve(tickets, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
        let unsortedTickets = [];
    for (let ticket of tickets) {
        ticket = ticket.split('|');
        ticket[1] = Number(ticket[1]);
        let currentTicket = new Ticket(ticket[0], ticket[1], ticket[2]);
        unsortedTickets.push(currentTicket);
    }
        let sortedTickets = [];
    switch (sorting){
        case "destination":
            sortedTickets = unsortedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedTickets = unsortedTickets.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedTickets = unsortedTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return sortedTickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));