import React from 'react';
import Container from "./Container";

const Sidebar = ({ selectedTicket, onComplete, resolvedTickets }) => {
    return (
        <div className='w-1/3'>
   <Container>
     <div className=" bg-gray-50 p-4 text-center">
      {/* Task Status */}
      <h2 className="text-lg font-semibold mb-2">Task Status</h2>
      {selectedTicket ? (
        <div className="bg-white p-4 shadow rounded mb-4">
          <p className="font-medium">{selectedTicket.title}</p>
          <button
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => onComplete(selectedTicket)}
          >
            Complete
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          Select a ticket to view task status
        </p>
      )}

      {/* Resolved Task */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Resolved Task</h2>
      {resolvedTickets.length > 0 ? (
        <ul>
          {resolvedTickets.map((ticket) => (
            <li
              key={ticket.id}
              className="bg-white p-3 mb-2 shadow rounded text-sm text-gray-700"
            >
              {ticket.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No tasks resolved yet</p>
      )}
    </div>
   </Container>
        </div>
    );
};

export default Sidebar;