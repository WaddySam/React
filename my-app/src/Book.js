import React from 'react'


 
 export const Book = ({title="No Title",author=" No Author",pages= 0,freeBookmark}) => {
    return(
        <section>
          <h2>{title}</h2>
          <p>By {author}</p>
          <p> Page: {pages}</p>
          <p> Free Bookmark {freeBookmark ? 'Yes': 'No'}</p>
        </section>
    
      )
    }