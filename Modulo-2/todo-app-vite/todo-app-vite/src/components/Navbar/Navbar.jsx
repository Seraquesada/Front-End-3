import React from 'react';
import avatarImg from "../../assets/logo/IMG_1856.jpg";
import { HeaderContainer, NavContainer, ImageContainer, UserInfoContainer } from "./navbar.style";

const Navbar = () => {
    return (
        <HeaderContainer>
            <NavContainer>
                <div>
                    <h3 style={{ color: "#7367f0" }}>Lista de Tareas, App.</h3>
                </div>
                <UserInfoContainer>
                    <div>
                        <p style={{ margin: "0", fontWeight: "bolder" }}>Developed by: </p>
                        <p style={{ margin: "0" }}>Jaider Vanegas</p>
                    </div>
                    <ImageContainer>
                        <img src={avatarImg} alt="profile_pic" />
                    </ImageContainer>
                </UserInfoContainer>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Navbar