import {useState} from 'react'

import {
  MainSection,
  Heading,
  Tagline,
  ReackHookImg,
  Description,
  ReadMoreOrLessBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readMore, setReadMore] = useState(false)

  const onClickReadMoreOrLessBtn = () => {
    setReadMore(prevState => !prevState)
  }

  const completeText = reactHooksDescription
  const slicedText = completeText.slice(0, 170)

  return (
    <MainSection>
      <Heading>React Hooks</Heading>
      <Tagline>Hooks are a new addition to React</Tagline>
      <ReackHookImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{readMore ? completeText : slicedText}</Description>
      <ReadMoreOrLessBtn type="button" onClick={onClickReadMoreOrLessBtn}>
        {readMore ? 'Read Less' : 'Read More'}
      </ReadMoreOrLessBtn>
    </MainSection>
  )
}

export default ReadMore
