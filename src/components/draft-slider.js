src={picSource.src} alt={picSource.alt}/

<React.Fragment>
    <img src={loupe} alt='dsfds' />
</React.Fragment>


<React.Fragment>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={loupe} className="d-block w-100" alt={this.props.alt[0]}/>
                        </div>
                        <div class="carousel-item">
                            <img src={telescope} className="d-block w-100" alt={this.props.alt[1]}/>
                        </div>
                        <div class="carousel-item">
                            <img src={letter} className="d-block w-100" alt={this.props.alt[2]}/>
                        </div>
                    </div>
                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </React.Fragment>