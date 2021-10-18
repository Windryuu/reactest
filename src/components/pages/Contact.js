const Contact = () => {
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
                This is the contact, ceci est une touchette
            </div>

            </div>

        </div>
      </section>) }

export default Contact
