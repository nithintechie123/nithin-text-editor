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
export const IconsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: 10px;
  list-style-type: none;
  padding: 0px;
`

export const IconItem = styled.li``

export const BoldIconBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  outline: none;
  color: ${props => (props.boldstatus ? '#faff00' : ' #f1f5f9')};
`
export const ItalicIconBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  outline: none;
  color: ${props => (props.italicstatus ? '#faff00' : ' #f1f5f9')};
`
export const UnderlineIconBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  outline: none;
  color: ${props => (props.underlinestatus ? '#faff00' : ' #f1f5f9')};
`

export const HorizontalLine = styled.hr`
  border: 0.5px solid #334155;
  margin: 0px;
`

export const InputTextArea = styled.textarea`
  background-color: transparent;
  outline: none;
  width: 100%;
  height: 85%;
  border-width: 0px;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 18px;
  padding: 10px;
  font-weight: ${props => (props.boldstatus ? 'bold' : 'normal')};
  font-style: ${props => (props.italicstatus ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlinestatus ? 'underline' : 'normal')};
`
