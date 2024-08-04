import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  EditorCardContainer,
  HeadingImageContainer,
  Heading,
  ImageElement,
  IconsTextAreaContainer,
  IconsContainer,
  HorizontalLine,
  IconBtn,
  InputTextArea,
} from '../../styledComponents'

class TextEditor extends Component {
  render() {
    return (
      <AppContainer>
        <EditorCardContainer>
          <HeadingImageContainer>
            <Heading>Text Editor</Heading>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </HeadingImageContainer>
          <IconsTextAreaContainer>
            <IconsContainer>
              <IconBtn data-testid="bold">
                <VscBold size={25} />
              </IconBtn>
              <IconBtn data-testid="italic">
                <GoItalic size={25} />
              </IconBtn>
              <IconBtn data-testid="underline">
                <AiOutlineUnderline size={25} />
              </IconBtn>
            </IconsContainer>
            <HorizontalLine />
            <InputTextArea type="textarea" row={12} col={12} />
          </IconsTextAreaContainer>
        </EditorCardContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
