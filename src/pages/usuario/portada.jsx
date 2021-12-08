import React from 'react';
import ModalContacto from '../../components/modales/Contactenos';
import ModalEquipo from '../../components/modales/Equipo';
import Imagen1 from '../../images/imagen1.png';
import Imagen2 from '../../images/imagen2.png';
import Imagen3 from '../../images/imagen3.png';
import NavbarUser from '../../components/NavbarUser';
import FooterUser from '../../components/FooterUser';
import { NavLink } from "react-router-dom";

const Portada = () => {
    return (
        <div>
            <NavbarUser />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                ¿Quiénes somos?
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <div className="btn btn-info sombra"><b><ModalContacto /></b></div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen1} className="radius-50 img-80 py-3" />
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img alt='' src={Imagen2} className="radius-50 img-80 py-3" />
                    </div>
                    <div className="col-md-6 pe-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>
                                Servicios
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <NavLink className="btn btn-info sombra" to="/servicios"><b>Más información</b></NavLink>
                        </div>
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                Nuestro equipo
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <NavLink className="btn btn-info sombra" to="/equipo"><b>Conócenos</b></NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen3} className="radius-50 img-80 py-3" />
                    </div>
                </div>
            </div>
            <FooterUser />
        </div>
    )
}

export default Portada
