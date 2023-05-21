import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  CardBgContainer,
  TextEditorLogoContainer,
  TextEditorHeading,
  TextEditorPic,
  ContentContainer,
  BoldButton,
  IconsContainer,
  HorizontalLine,
  TextAreaEl,
  ActiveButton,
  AllActive,
  BoldItalic,
  BoldText,
  ItalicText,
  UnderlineText,
  BoldUnderline,
  ItalicUnderline,
  ListBtn,
} from './styledComponents'

class TextEditor extends Component {
  state = {text: '', isBold: false, isItalic: false, isUnderLine: false}

  updateText = event => {
    this.setState({text: event.target.value})
  }

  updateBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
    console.log('Bold')
  }

  updateItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  updateUnderline = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  renderOnOutput = () => {
    const {isBold, isItalic, isUnderLine, text} = this.state
    switch (true) {
      case isBold === true && isItalic === true && isUnderLine === true:
        return <AllActive value={text} onChange={this.updateText} />
      case isBold === true && isItalic === true && isUnderLine === false:
        return <BoldItalic value={text} onChange={this.updateText} />
      case isBold === true && isItalic === false && isUnderLine === false:
        return <BoldText value={text} onChange={this.updateText} />
      case isBold === false && isItalic === true && isUnderLine === false:
        return <ItalicText value={text} onChange={this.updateText} />
      case isBold === false && isItalic === false && isUnderLine === false:
        return <TextAreaEl value={text} onChange={this.updateText} />
      case isBold === false && isItalic === false && isUnderLine === true:
        return <UnderlineText value={text} onChange={this.updateText} />
      case isBold === true && isItalic === false && isUnderLine === true:
        return <BoldUnderline value={text} onChange={this.updateText} />
      case isBold === false && isItalic === true && isUnderLine === true:
        return <ItalicUnderline value={text} onChange={this.updateText} />
      default:
        return null
    }
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    return (
      <BgContainer>
        <CardBgContainer>
          <TextEditorLogoContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorPic
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorLogoContainer>
          <ContentContainer>
            <IconsContainer>
              <ListBtn>
                {isBold ? (
                  <ActiveButton data-testid="bold" onClick={this.updateBold}>
                    <VscBold size={25} />
                  </ActiveButton>
                ) : (
                  <BoldButton data-testid="bold" onClick={this.updateBold}>
                    <VscBold size={25} />
                  </BoldButton>
                )}
              </ListBtn>
              {isItalic ? (
                <ListBtn>
                  <ActiveButton
                    data-testid="italic"
                    onClick={this.updateItalic}
                  >
                    <GoItalic size={25} />
                  </ActiveButton>
                </ListBtn>
              ) : (
                <ListBtn>
                  <BoldButton data-testid="italic" onClick={this.updateItalic}>
                    <GoItalic size={25} />
                  </BoldButton>
                </ListBtn>
              )}
              {isUnderLine ? (
                <ListBtn>
                  <ActiveButton
                    data-testid="underline"
                    onClick={this.updateUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </ActiveButton>
                </ListBtn>
              ) : (
                <ListBtn>
                  <BoldButton
                    data-testid="underline"
                    onClick={this.updateUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </BoldButton>
                </ListBtn>
              )}
            </IconsContainer>
            <HorizontalLine />
            {this.renderOnOutput()}
          </ContentContainer>
        </CardBgContainer>
      </BgContainer>
    )
  }
}
export default TextEditor
