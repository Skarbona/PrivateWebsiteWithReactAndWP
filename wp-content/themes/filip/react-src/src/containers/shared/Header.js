import React from 'react';
import M from 'materialize-css'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.sideNav = React.createRef();
    }

    componentDidMount = () => {
        const { sideNav } = this;

        const elems = sideNav.current;
        const instances = M.Sidenav.init(elems);

    };

    render() {
        const { sideNav } = this;
        return (
            <React.Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo" ref={sideNav}>
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>

            </React.Fragment>
        );
    }
}

export default Header;
