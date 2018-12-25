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
        const { props: { menu, refHome, refTools, refPortfolio, refGallery, refContact } } = this;
        if (!menu) return;

        return menu.map((menuItem)=>{
            let ref = null;
            switch(menuItem.post_excerpt) {
                case 'home' : ref = refHome ; break;
                case 'tools' : ref = refTools ; break;
                case 'portfolio' : ref = refPortfolio ; break;
                case 'gallery' : ref = refGallery ; break;
                case 'contact' : ref = refContact ; break;
                default : ref = refHome;
            }
            return (
                <li key={`menuID-${menuItem.ID}`}
                    ref={ref}
                    className="animated fadeInDown slow"
                    onClick={()=>{ ref.current.scrollIntoView({block: "start", behavior: 'smooth'});  }}
                >
                    <Link to="/"> {menuItem.post_title} </Link>
                </li>
            );
        })
    };

    render() {
        const { sideNav, menuMapHandler } = this;
        return (
            <React.Fragment>
                <div className="navbar-fixed">
                    <nav className="primary darken-1 animated slideInDown">
                        <div className="nav-wrapper container">
                            <Link to="/" className="brand-logo">
                                FilipS.okołowski
                            </Link>
                            <Link to="#" data-target="mobile-burger" className="sidenav-trigger"><i
                                className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                { menuMapHandler() }
                            </ul>
                        </div>
                    </nav>
                </div>

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
