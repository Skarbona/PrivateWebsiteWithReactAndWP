import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../components/Shared/Modal';
import GalleryPhotos from './GalleryPhotos';

class GalleryListItem extends React.Component {

    state = {
        modalOpened: false,
        openClass: '',
        style: { display: 'none' },
    };

    openModalHandler = () => {
      this.setState({ modalOpened: true, style: { display: 'block' } });
      setTimeout(()=>{
          this.setState({
              openClass: 'open'
          });
      },100);

    };

    closeModalHandler = e => {
        this.setState({ modalOpened: false, openClass: '', style: { display: 'none' } });
    };

    render() {
        const { single } = this.props;
        const {
            openModalHandler, closeModalHandler,
            state : { modalOpened, openClass, style }
        } = this;

        const image = single.acf.feature_image || 'https://via.placeholder.com/400';
        return (
            <React.Fragment>
                <div className="col s12 m6 l6 xl4 animated fadeIn">
                    <div className="card">
                        <div className="card-image"
                             onClick={openModalHandler}
                             style={{
                            cursor: 'pointer',
                            backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${image})`
                        }}>
                            <span className="card-title"> {single.title.rendered}</span>
                            <Link to="/" className="btn-floating halfway-fab waves-effect waves-light primary darken-1"
                                onClick={openModalHandler} >
                                <i className="material-icons">add</i>
                            </Link>
                        </div>
                    </div>
                </div>
                { modalOpened ? (
                    <Modal
                        openClass={openClass}
                        style={style}
                        onClose={closeModalHandler}
                    >
                        <GalleryPhotos photos={single.acf.gallery} />
                    </Modal>

                ) : null }
            </React.Fragment>
        );
        }

}



export default GalleryListItem;
