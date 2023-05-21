import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardBgContainer = styled.div`
  margin-top: 24px;
  padding: 12px;
  background-color: #1b1c22;
  height: 80vh;
  display: flex;
  border-radius: 12px;
`
export const TextEditorLogoContainer = styled.div`
  padding: 0px;
`
export const TextEditorHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
export const TextEditorPic = styled.img`
  width: 400px;
  height: 400px;
`
export const ContentContainer = styled.div`
  background-color: #25262c;
  margin: 4px;
  border-radius: 8px;
  padding: 12px;
`
export const IconsContainer = styled.ul`
  display: flex;
  padding: 12px;
`
export const ListBtn = styled.li`
  list-style-type: none;
`
export const BoldButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  margin: 12px;
  color: #f1f5f9;
`
export const ActiveButton = styled(BoldButton)`
  color: #faff00;
`

export const HorizontalLine = styled.hr`
  color: #f1f5f9;
`
export const TextAreaEl = styled.textarea`
  width: 120px;
  height: 100px;
  background-color: transparent;
  border-width: 0px;
  color: #f1f5f9;
  text-decoration: normal;
  font-weight: normal;
  font-style: normal;
`

export const AllActive = styled(TextAreaEl)`
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
`
export const BoldItalic = styled(TextAreaEl)`
  font-weight: bold;
  font-style: italic;
`
export const BoldText = styled(TextAreaEl)`
  font-weight: bold;
`
export const ItalicText = styled(TextAreaEl)`
  font-style: italic;
`
export const UnderlineText = styled(TextAreaEl)`
  text-decoration: underline;
`
export const BoldUnderline = styled(TextAreaEl)`
  font-weight: bold;
  text-decoration: underline;
`
export const ItalicUnderline = styled(TextAreaEl)`
  font-style: italic;
  text-decoration: underline;
`
