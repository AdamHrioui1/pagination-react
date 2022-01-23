import React from 'react';

function List({ data, currentPage, itemsPerPage}) {
  return <div className='list' >   
      {
        data.slice(currentPage*itemsPerPage, currentPage*itemsPerPage+itemsPerPage).map(item => {
          return <p key={item.id}><span>{item.id}</span> - {item.title}</p>
        })
      }
  </div>;
}

export default List;
