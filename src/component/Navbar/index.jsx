import React from "react";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-default navbar-fixed-top before-color">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand alo" href="index.html">PT Makmur Abadi Senantiasa</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right scroll-to">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="post-single.html">Blog Post</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Pages <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="typography.html">Typography</a></li>

                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;