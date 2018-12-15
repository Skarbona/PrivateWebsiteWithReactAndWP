import React from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.sideNav = React.createRef();
    }

    componentDidMount = () => {
        const { sideNav } = this;

        const elems = sideNav.current;
        M.Sidenav.init(elems);

    };

    menuMapHandler = () => {
        const { props: { menu } } = this;
        if (!menu) return;

        return menu.map((menuItem)=>{
            return (
                <li key={`menuID-${menuItem.ID}`}>
                    <Link to={menuItem.url}>{menuItem.post_title}</Link>
                </li>
            );
        })
    };

    render() {
        const { sideNav, menuMapHandler } = this;
        return (
            <React.Fragment>
                <nav className="light-blue darken-1">
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">FilipS.okołowski</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {menuMapHandler()}
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo" ref={sideNav}>
                    {menuMapHandler()}
                </ul>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
            menu : state.init.menu
        }
 };


export default connect(mapStateToProps)(Header);