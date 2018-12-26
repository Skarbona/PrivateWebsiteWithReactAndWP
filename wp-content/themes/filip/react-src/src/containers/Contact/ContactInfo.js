import React from 'react';

class ContactInfo extends React.Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.topLayer = React.createRef();
        this.handle = React.createRef();
        this.state = {
            x : 0,
            y : 0,
            delta: 0,
            skew: 0
        }
    }

    wrapperOnMouseMove = e => {
        let { topLayer, handle } = this;
        const { delta, skew, x } = this.state;

        this.setState({ x: e.clientX, y: e.clientY });

        this.setState({
            delta: (x - window.innerWidth / 2) * 0.5
        });

        handle.current.style.left = x + delta + 'px';
        topLayer.current.style.width = x + skew + delta + 'px';
    };

    wrapperOnMouseMobile = e => {
        let { topLayer, handle } = this;
        const { delta, skew, x } = this.state;

        this.setState({ x: e.touches[0].clientX, y: e.touches[0].clientY });

        this.setState({
            delta: (x - window.innerWidth / 2) * 0.5
        });
        handle.current.style.left = x + delta + 'px';
        topLayer.current.style.width = x + skew + delta + 'px';
    };

    componentDidMount = () => {
        const { wrapper  } = this;

        if(wrapper.current.className.indexOf('skewed') !== -1) {
            this.setState({ skew : 1000 });
        }

    };

    render(){
        const { wrapper, topLayer, handle, wrapperOnMouseMove, wrapperOnMouseMobile } = this;
        return (
            <React.Fragment>
                <section id="wrapper"
                         className="skewed"
                         onMouseMove={wrapperOnMouseMove}
                         onTouchMove={wrapperOnMouseMobile}
                         onTouchStart={wrapperOnMouseMobile}
                         onTouchEnd={wrapperOnMouseMobile}
                         onTouchCancel={wrapperOnMouseMobile}
                         ref={wrapper}>
                    <div className="layer bottom grey darken-3">
                        <div className="content-wrap">
                            <div className="content-body">
                                <h2 className="grey-text lighten-3-text">
                                    E-mail
                                </h2>
                                <p className="flow-text grey-text lighten-3-text">
                                    filip.sokolowski1990@gmail.com
                                </p>
                            </div>

                            <img src="/wp-content/uploads/2018/12/1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="layer top grey lighten-3" ref={topLayer}>
                        <div className="content-wrap">
                            <div className="content-body">
                                <h2 className="primary-text darken-1-text">
                                    Phone
                                </h2>
                                <p className="flow-text primary-text darken-1-text">
                                    +48 690 502 937
                                </p>
                            </div>

                            <img src="/wp-content/uploads/2018/12/2.jpg" alt="" />
                        </div>
                    </div>

                    <div className="handle primary darken-1" ref={handle} />
                </section>
            </React.Fragment>
        );
    }

}

export default ContactInfo;


