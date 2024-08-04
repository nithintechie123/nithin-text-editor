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
  BoldIconBtn,
  ItalicIconBtn,
  UnderlineIconBtn,
  InputTextArea,
  IconItem,
} from '../../styledComponents'

class TextEditor extends Component {
  state = {
    boldStatus: false,
    italicStatus: false,
    underlineStatus: false,
  }

  onClickBoldIcon = () => {
    this.setState(prevState => ({
      boldStatus: !prevState.boldStatus,
    }))
  }

  onClickItalicIcon = () => {
    this.setState(prevState => ({
      italicStatus: !prevState.italicStatus,
    }))
  }

  onClickUnderlineIcon = () => {
    this.setState(prevState => ({
      underlineStatus: !prevState.underlineStatus,
    }))
  }

  render() {
    const {boldStatus, italicStatus, underlineStatus} = this.state
    console.log(boldStatus, italicStatus, underlineStatus)

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
                <BoldIconBtn
                  data-testid="bold"
                  onClick={this.onClickBoldIcon}
                  boldstatus={boldStatus}
                >
                  <VscBold size={25} />
                </BoldIconBtn>
              </IconItem>
              <IconItem>
                <ItalicIconBtn
                  data-testid="italic"
                  onClick={this.onClickItalicIcon}
                  italicstatus={italicStatus}
                >
                  <GoItalic size={25} />
                </ItalicIconBtn>
              </IconItem>
              <IconItem>
                <UnderlineIconBtn
                  data-testid="underline"
                  onClick={this.onClickUnderlineIcon}
                  underlinestatus={underlineStatus}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineIconBtn>
              </IconItem>
            </IconsContainer>
            <HorizontalLine />
            <InputTextArea
              boldstatus={boldStatus}
              italicstatus={italicStatus}
              underlinestatus={underlineStatus}
            />
          </IconsTextAreaContainer>
        </EditorCardContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
