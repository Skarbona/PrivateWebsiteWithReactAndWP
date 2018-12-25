import React from 'react';
import M from 'materialize-css';

class GalleryPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.carousel = React.createRef();
    };

    componentDidMount = () => {
        const { carousel } = this;
            const elems = carousel.current;
            M.Carousel.init(elems);
    };

    photosHandler = () => {
        const { props: { photos } } = this;
        return photos.map(photo => {
           return (
               <a className="carousel-item" href={`#photo-${photo.ID}`} key={`photo-${photo.ID}`}>
                   <img src={photo.sizes.large} alt={photo.title.rendered} />
               </a>
           )
        })
    };

    render() {
        const { carousel, photosHandler } = this;
        return (
            <div className="carousel" ref={carousel}>
                { photosHandler() }
            </div>
        );
    }
}

export default GalleryPhotos;
