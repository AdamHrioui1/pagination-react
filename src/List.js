import React from 'react';

function List({ data, currentPage, itemsPerPage}) {
  return <div className='list' >   
      {
        data.slice(currentPage*itemsPerPage, currentPage*itemsPerPage+itemsPerPage).map(item => {
          return <h2 key={item.id}><span>{item.id}</span> - {item.title}</h2>
        })
      }
  </div>;
}

export default List;
