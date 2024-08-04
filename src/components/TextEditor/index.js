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
  IconItem,
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
              <IconItem>
                <IconBtn data-testid="bold" onClick={this.onClickBoldIcon}>
                  <VscBold size={25} />
                </IconBtn>
              </IconItem>
              <IconItem>
                <IconBtn data-testid="italic" onClick={this.onClickItalicIcon}>
                  <GoItalic size={25} />
                </IconBtn>
              </IconItem>
              <IconItem>
                <IconBtn
                  data-testid="underline"
                  onClick={this.onClickUnderlineIcon}
                >
                  <AiOutlineUnderline size={25} />
                </IconBtn>
              </IconItem>
            </IconsContainer>
            <HorizontalLine />
            <InputTextArea type="text" />
          </IconsTextAreaContainer>
        </EditorCardContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
