import {useEffect,useState} from 'react';

const Galery = () => {
  const [galeryArray,setGalery] = useState([]);
  const [page, setPage] = useState(1);
  
 
  const loadPicsum = () =>{
    fetch("https://picsum.photos/v2/list?page="+page+"&limit=6")
    .then(response => response.json() )
    .then( data => {
      //console.log(data);
      setGalery(data);
    })
  }

  useEffect(()=>{
    loadPicsum();
  },[page]);

  const ListImages = () => (
      <div className="row">
      {
        galeryArray.map((img)=>{
          const urlImg = "https://picsum.photos/id/"+img.id+"/640/240";
          return (
          <div key={img.id} className="col-12 col-md-4">
            <a href={img.url} target="_blank" rel="noreferrer">
            <img className="img-fluid mb-3" src={ urlImg } alt=""/>
            </a>
            <h4 className="text-center">{img.author}</h4>
            </div>
          )
        })
      }
        
      </div>
    )
  const Pagination = () => (
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

    return(
    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                

                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src={require("../../assests/images/pomme1.jpg").default}/>
      </div>
      <div className="carousel-item">
      <img src={require("../../assests/images/pomme2.png").default}/>
      </div>
      <div className="carousel-item">
      <img src={require("../../assests/images/pomme3.jpg").default}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
 
                </div>
            
            <div className="col-12 col-md-6">
                This is the galery, ceci est la galère
            </div>

            </div>

        </div>


            <div className="col-12">
                <ListImages/>

            </div>
            <div>
                <Pagination/>
                {// could be <Pagination page={page} setPage={setPage} />
                }
            </div>
      </section>) }

export default Galery
