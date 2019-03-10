import styled from '@emotion/styled'
import { H2 } from 'components/atoms/withIntl'
import React from 'react'
import { TEAL, CORAL } from 'styles/colors'

const StyledOutlineItem = styled.li``
const StyledTableOfContents = styled.section`
  border: solid 1px #fcb5b5;
  padding: 30px 10px;
  margin: 50px 0!important;
  * {
    font-size: 16px;
    color: ${TEAL}
  }
  h2 {
    font-size: 16px;
    color: ${CORAL};
    margin: 0 0 36px;
    text-align: center;
  }

  ul {
    margin: 0;
  }
  ${StyledOutlineItem} {
    margin: 12px 0;
    color: ${TEAL};
    line-height: 1.5;
    padding-left: 30px;
    font-weight: 400;
    &:before {
      width: 2px;
      height: 2px;
      background-color: ${TEAL};
      left: 20px;
      top: 14px;
      border-radius: 50%;
    }
    a {
      font-size: 16px;
      text-decoration: none;
    }
  }
  & > ul > ${StyledOutlineItem} {
    font-weight: 700;
  }
`

interface OutlineItemProps {
  id: string,
  title: string,
  children?: OutlineItemProps[]
}

interface Props {
  outline: OutlineItemProps[]
}

const OutlineItem: React.SFC<OutlineItemProps> = ({ id, title, children }) => <StyledOutlineItem>
  <a href={`#${id}`}>{title}</a>
  {!!children && <ul>{children.map(item =>
    <OutlineItem
      key={item.title}
      {...item}
    />
  )}</ul>}
</StyledOutlineItem>

export const TableOfContents: React.SFC<Props> = ({ outline }) =>
  <StyledTableOfContents>
    <H2 intlKey='glossary.tableOfContents'>목차</H2>
    <ul>
      {outline.map(item =>
        <OutlineItem
          key={item.title}
          {...item}
        />
      )}
    </ul>
  </StyledTableOfContents>