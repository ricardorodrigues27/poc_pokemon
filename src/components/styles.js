import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 10px;
  > div {
    text-align: center;
    img {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 70%;
      height: 200px;
    }
  }
`

export const Header = styled.div`
  background-color: yellow;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  p {
    font-size: 20px;
    color: black;
    font-weight: bold;
    padding: 10px;
  }
`

export const Body = styled.div`
  padding: 10px;
`

export const BodyMeta = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    background-color: blue;
    color: white;
    border-radius: 10px;
    padding: 3px 10px;
  }
`

export const BodyAttacks = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    background-color: red;
    border-radius: 10px;
    color: white;
    padding: 3px 10px;
  }
`