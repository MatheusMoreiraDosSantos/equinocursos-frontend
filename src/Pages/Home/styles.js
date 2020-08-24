import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Header = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    top:0;
    background: #ed145b;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    > div {
        display: flex;
        align-items: center;
    }

    @media(max-width: 790px){
        display: none;
    }

    h4 {
        margin-left: -60px;
        margin-top: 20px;

        @media(max-width: 1200px){
            display: none;
        }
    }
`;
export const Search = styled.input`
    width: 300px;
    height: 35px;
    background: #fff;
    border: 0;
    border-radius: 5px;
    padding: 6px;
    font-size: 1.0rem;

    @media(max-width: 790px){
        display: none;
    }
`;
export const ButtonSearch = styled.button`
    width: 90px;
    height: 33px;
    background: #222222;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 12px;
    margin-left: 8px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }

    @media(max-width: 790px){
        display: none;
    }
`;
export const ButtonRegistrar = styled.button`
    width: 200px;
    height: 35px;
    background: #1D3240;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 6px;
    font-size: 1.2rem;

    &:hover {
        opacity: 0.8;
    }

    @media(max-width: 790px){
        display: none;
    }
`;
export const ContainerCard = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 70px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, auto));
    justify-content: center;

    @media(max-width: 750px){
        margin-top: 20px;
    }

`;
export const Card = styled.div`
    width: 300px;
    height: 610px;
    font-family: 'Nunito', sans-serif;
    font-weight: normal;
    font-size: 18px;
    border-radius: 5px;
    background: #292929;
    padding: 10px;
    color: #b5b5b5;
    margin: 10px;

    > img {
        width: 280px;
        max-height: 345px;
        border-radius: 5px;
    }
`;
export const HeaderMobile = styled.div`
    display: none;

    @media(max-width: 790px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        background: #ed145b;
        position: fixed;
        bottom: 0;
        padding: 10px;

        svg {
            color: #fff;
        }
        div {
            display: flex;
            align-items: center;
        }
    }
`;
export const SearchMobile = styled.input`
    width: 250px;
    height: 32px;
    padding: 8px;
    border: 0;
    border-radius: 5px;
    background: #fff;
    color: #000;
    margin-right: 4px;
`;
export const ButtonSearchMobile = styled.button`
    border: 0;
`;
export const ButtonRegistrarMobile = styled.button`
    border: 0;
    :first-child{
        margin-right: 9px;
    }
`;
export const ContainerRegistrar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
export const CardRegistrar = styled.div`
    width: 90%;
    max-width: 330px;
    height: 650px;
    background: #666;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    position: fixed;
    top: 0;

    > h2 {
        font-size: 1.2rem;
        >button{
            border:0;
            margin-left: 45px;
            svg{
                fill: #fff;
                &:hover{
                    fill: #ed145b;
                }
            }
        }
    }

    div {
        margin: 15px;
        input{
            border:0;
            border-radius: 5px;
            background: #fff;
            /* color: #000; */
            width: 270px;
            height: 30px;
            padding: 8px;
        }
    }
`;

export const ButtonSave = styled.button`
    width: 100px;
    height: 35px;
    background: #F20732;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 6px;
    margin-left: 8px;
    font-size: 1.2rem;

    &:hover {
        opacity: 0.8;
    }
`;
export const ButtonHelpMobile = styled.button`
    border: 0;
`;