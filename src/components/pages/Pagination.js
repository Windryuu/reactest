const Pagination = ({page,setPage}) => (
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className={"page-item "+(page===1?"disabled":null)}><a className="page-link" onClick={()=> page>1?setPage(page-1):null} href="#">Previous</a></li>
    <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
    <li className="page-item"><a className="page-link" onClick={()=>setPage(page+1)} href="#">{page+1}</a></li>
    <li className="page-item"><a className="page-link" onClick={()=>setPage(page+2)} href="#">{page+2}</a></li>
    <li className="page-item"><a className="page-link" onClick={()=>setPage(page+1)} href="#">Next</a></li>
  </ul>
</nav>
  )

  export default Pagination