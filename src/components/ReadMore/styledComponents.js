import styled from 'styled-components'

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 500;
  margin-top: 23px;
  margin-bottom: 0;
  color: #1e293b;

  @media (max-width: 577px) {
    font-size: 34px;
  }
`

export const Tagline = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 33px;
  color: #334155;

  @media (max-width: 577px) {
    font-size: 20px;
  }
`

export const ReackHookImg = styled.img`
  width: 47%;

  @media (max-width: 577px) {
    width: 80%;
  }
`

export const Description = styled.p`
  width: 47%;
  font-size: 16px;
  line-height: 1.3;
  color: #334155;

  @media (max-width: 577px) {
    width: 80%;
    font-size: 21px;
  }
`

export const ReadMoreOrLessBtn = styled.button`
  width: 100px;
  height: 33px;
  border-radius: 8px;
  border-width: 0;
  color: #ffffff;
  background-color: #1f81ff;
  font-size: 16px;

  @media (max-width: 577px) {
    align-self: flex-start;
    margin-left: 10%;
    height: 44px;
    width: 120px;
  }
`
