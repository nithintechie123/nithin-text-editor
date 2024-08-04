import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EditorCardContainer = styled.div`
  background-color: #1b1c22;
  width: 80%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
`

export const HeadingImageContainer = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`

export const ImageElement = styled.img`
  width: 300px;
`

export const IconsTextAreaContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  height: 90%;
  width: 50%;
  border-radius: 10px;
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: 10px;
`

export const IconBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  outline: none;
  color: #f8fafc;
`

export const HorizontalLine = styled.hr`
  border: 0.5px solid #334155;
  margin: 0px;
`

export const InputTextArea = styled.input`
  background-color: transparent;
  outline: none;
`
