import React from 'react';

function List({ data, currentPage, itemsPerPage}) {
  return <div>   
      {
        data.slice(currentPage*itemsPerPage, currentPage*itemsPerPage+itemsPerPage).map(item => {
          return <h2 key={item.id}>{item.id} - {item.title}</h2>
        })
      }
  </div>;
}

export default List;
