import styled from "styled-components";

export const Container = styled.div`
    margin: 11rem auto;
    width: 1280px;
    height: 720px;
    background-color: #fff;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
`;

export const DivInput = styled.div`
    width: 60%;
    display: inline-block;
    padding: 7.9rem 0;
    border-radius: 10px 0 0 10px;
    border-right: 1px solid #7E7373;

    .div-title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputs {
        width: 50%;
        margin-top: 2rem;
    }

    .link {
        color: #170B9F;
        text-decoration: none;
        font-size: 12px;
        font-weight: 600;
        margin-left: 70%;
        cursor: pointer;
    }

    .new-accont {
        margin: 1rem 0 1rem 1rem;
        font-weight: 600;
        color: #7E7373;
    }

    .new-accont a {
        text-decoration: none;
        color: #170B9F;
    }
`;

export const Title = styled.h1`
    margin: 0;
`;

export const SubTitle = styled.p`
    margin: 0.2rem 0;
`;