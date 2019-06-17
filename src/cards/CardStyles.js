import styled from "styled-components";

export const StyledDebt = styled.section`
  border-bottom: solid 1px #eeeeee;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: #090a0a;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 10px 0 5px 0;
  width: 350px;
`;

export const StyledCreditor = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`;

export const StyledAmount = styled.div`
  display: flex;
  font-size: 20px;
  padding-left: 50px;
  padding-top: 10px;
`;

export const StyledDueDate = styled.div`
  color: #a2a3a3;
  font-size: 18px;
  padding-top: 2px;
`;

export const DeleteIcon = styled.img`
  display: flex;
  height: 22px;
  justify-self: flex-end;
  margin-bottom: 10px;
  width: 22px;
`;

export const StyledBackground = styled.main`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  display: grid;
  height: calc(100vh - 150px);
  overflow-y: scroll;
`;

export const StyledAmountBox = styled.section`
  background: #5495b7;
  border-radius: 15px;
  box-shadow: 2px 4px 10px #5495b7;
  height: 180px;
  margin: 0 auto 35px auto;
  width: 200px;
`;

export const StyledCreditIcon = styled.img`
  height: 50px;
  margin: 30px 0 18px 18px;
  width: 58px;
`;

export const StyledResult = styled.div`
  color: #fbfbfb;
  font-size: 22px;
  font-weight: bold;
  height: 30px;
  margin: 0;
  padding-left: 20px;
  width: 280px;
`;

export const StyledHeading = styled.h3`
  color: #fbfbfb;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  opacity: 0.7;
  padding-left: 22px;
`;
