import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
function Pages() {
  return (
    <Pagination className='pagination' size='md'>
  <Pagination.First disabled />
  <Pagination.Prev disabled/>
  <Pagination.Item active>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item >{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>
  {/* <Pagination.Item disabled>{}</Pagination.Item> */}

  {/* <Pagination.Ellipsis /> */}
  {/* <Pagination.Item>{20}</Pagination.Item> */}
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
  )
}

export default Pages