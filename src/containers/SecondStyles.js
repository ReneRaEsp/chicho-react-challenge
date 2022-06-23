import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: auto;
    margin-top: 1rem;
    width: 90%;
    height: auto;
    background: rgba(30, 179, 220, 0.9);
    border-radious: 1rem;
    padding-bottom: 3rem;
    .contTitle {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 10px 20px;
      .title {
        color: white;
      }
    }
    .contSearch {
      display: flex;
      justify-content: center;
      width: 100%;
      input {
        padding: 1rem;
        height: 2rem;
        outline-width: 0;
        border: 0px;
      }
      select {
        text-align: center;
        color: rgb(73, 73, 73, 0.9);
        width: 14rem;
        height: 2rem;
        outline-width: 0;
        border: 0px;
      }
    }
    
    }
  `;

const ContTable = styled.table`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    table {
      width: 100%;
      tr {
          background-color: rgba(233, 233, 233, .8);
        td {
          text-align: center;
          img {
            margin: auto;
            width: 7rem;
          }
        }
      }
  `;

const DeleteBtn = styled.button`
  width: 5rem;
  height: 2rem;
  color: rgba(200, 34, 74, 0.8);
  border: 3px solid rgba(200, 34, 74, 0.8);
  background: rgba(220,220,220,0.7);
  &:hover {
    cursor: pointer;
  }
`;

export { ContTable, Container, DeleteBtn };
