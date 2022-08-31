import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 0px 10px;
    background-color: #eee;
    border-radius: 10px;
    background: linear-gradient(180deg,hsla(0,0%,97.3%,.95) 44%,hsla(0,0%,97.3%,.46) 73%,hsla(0,0%,100%,0));
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    & > img {
        width: 100%;
        border-radius: 100%;
    }
`;