import styled from "@emotion/styled";

const Nav = styled.header`
display: flex;
justify-content: space-between;
  background: rgb(20, 120, 230);
  width: 100%;
  height: 7rem;
  color: white;
  h4 {
    margin: 0; 
    padding: 1rem;
    font-size: 2rem;
  }
  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%; 
    .link {
        text-decoration: none;
        color: white;
        font-weigth: bold;
    }
  }
`;

export { Nav };
