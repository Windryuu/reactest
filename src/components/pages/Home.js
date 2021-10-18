const Home = () => {
    return(
    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                

                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require("../../assests/images/pomme1.jpg").default}/>
    </div>
    <div class="carousel-item">
    <img src={require("../../assests/images/pomme2.png").default}/>
    </div>
    <div class="carousel-item">
    <img src={require("../../assests/images/pomme3.jpg").default}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 
                </div>
            
            <div className="col-12 col-md-6">
                bleep
            </div>

            </div>

        </div>
      </section>) }

export default Home
