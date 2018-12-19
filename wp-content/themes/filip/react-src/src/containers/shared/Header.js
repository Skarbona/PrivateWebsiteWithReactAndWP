import React from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'animate.css';

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
                <li key={`menuID-${menuItem.ID}`}
                    className="animated fadeInDown slow">
                    <Link to={menuItem.url}>{menuItem.post_title}</Link>
                </li>
            );
        })
    };

    render() {
        const { sideNav, menuMapHandler } = this;
        return (
            <React.Fragment>
                <nav className="primary darken-1 animated slideInDown">
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo animated fadeInDown slow">
                            FilipS.okołowski
                        </Link>
                        <a href="#" data-target="mobile-burger" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {menuMapHandler()}
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-burger" ref={sideNav}>
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
