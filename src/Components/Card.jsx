import Container from "./Container";
import React from 'react';


const getPriorityColor = (priority) => {
  switch (priority) {
    case "HIGH PRIORITY":
      return "text-red-600";
    case "MEDIUM PRIORITY":
      return "text-yellow-600";
    case "LOW PRIORITY":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "bg-green-100 text-green-600";
    case "In-Progress":
      return "bg-yellow-100 text-yellow-600";
    case "Closed":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const Card = ({ tickets, onCardClick, resolvedTickets }) => {
 


    return (
<div className="w-2/3"> 
       <Container>
           <h2 className="text-xl font-semibold mb-5 pl-4">Customer Tickets</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {tickets.map((ticket) => {
        const isResolved = resolvedTickets.includes(ticket.id);
        return (
          <div
            key={ticket.id}
            onClick={() => !isResolved && onCardClick(ticket)}
            className={`cursor-pointer border rounded-lg p-4 shadow-sm bg-white ${
              isResolved ? "opacity-50 pointer-events-none" : "hover:shadow-md"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{ticket.title}</h3>
              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span className={getPriorityColor(ticket.priority)}>{ticket.priority}</span>
              <span>{ticket.customer}</span>
              <span>{ticket.createdAt}</span>
            </div>
          </div>
        );
      })}
        </div>
        
        </Container>
        </div>
    );
};

export default Card;