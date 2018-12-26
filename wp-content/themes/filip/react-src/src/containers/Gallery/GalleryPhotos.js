import React from 'react';
import M from 'materialize-css';
import Loader from '../../components/Shared/Loader'

class GalleryPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.carousel = React.createRef();
        this.state = {
            imageLoading: true,
        }
    };

    componentDidMount = () => {
        const { carousel } = this;
            const elems = carousel.current;
            M.Carousel.init(elems);
    };

    imageLoadHandler = () => {
        this.setState({ imageLoading: false })
    };

    photosHandler = () => {
        const { state: { imageLoading }, props: { photos }, imageLoadHandler } = this;
        return photos.map(photo => {
           return (
               <a className="carousel-item" href={`#photo-${photo.ID}`} key={`photo-${photo.ID}`}>
                   <img src={photo.sizes.large}
                        style={{ visibility: imageLoading ? 'hidden': 'visible'}}
                        onLoad={imageLoadHandler}
                        alt={photo.title.rendered} />
                   {imageLoading ? <Loader /> : '' }
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
