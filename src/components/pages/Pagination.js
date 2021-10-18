const Pagination = ({page,setPage}) => (
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class={"page-item "+(page===1?"disabled":null)}><a class="page-link" onClick={()=> page>1?setPage(page-1):null} href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">{page}</a></li>
    <li class="page-item"><a class="page-link" onClick={()=>setPage(page+1)} href="#">{page+1}</a></li>
    <li class="page-item"><a class="page-link" onClick={()=>setPage(page+2)} href="#">{page+2}</a></li>
    <li class="page-item"><a class="page-link" onClick={()=>setPage(page+1)} href="#">Next</a></li>
  </ul>
</nav>
  )

  export default Pagination