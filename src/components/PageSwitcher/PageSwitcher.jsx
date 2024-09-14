import React from 'react'
import classes from "./PageSwitcher.module.css"
import SimpleButton from '../SimpleButton/SimpleButton'

const PageSwitcher = ({ currPage, setCurrPage, totalCount }) => {
  const len = 10

  const generatePageNumbers = () => {
    let pages = []
    
    if (totalCount < 10) {
      for (let i = 2; i <= totalCount; i++) {
        pages.push(i)
      }
    } else if (currPage < 5 && totalCount > 10) {
      for (let i = 2; i <= 10; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalCount)
    } else if (currPage >= 5) {
      pages.push('...')
      if (currPage + 5 <= totalCount) {
        for (let i = currPage - 2; i <= currPage + 2; i++) {
          pages.push(i)
        }
      } else {
        for (let i = currPage - 4; i < totalCount; i++) {
          pages.push(i)
        }
      }
      if (currPage + 5 <= totalCount) {
        pages.push('...')
      }
      pages.push(totalCount)
    }
    return pages
  }

  return (
    <div className={classes.centerer}>
      <div className={classes.numsContainer}>
        <div style={
          {
            opacity: currPage > 1 ? "100%" : "50%"
          }
        }>
          <SimpleButton weight={700} size={1.6} onClickFunc={() => {
            if (currPage > 1) { setCurrPage(currPage - 1) }
          }}>{"<"}</SimpleButton>
        </div>

        <SimpleButton weight={currPage == 1 ? 700 : 500} size={1.6} onClickFunc={() => {
          setCurrPage(1)
        }}>1</SimpleButton>

        {generatePageNumbers().map((page, index) =>
          page === '...'
            ? <SimpleButton key={index} weight={500} size={1.6} disabled>...</SimpleButton>
            : <SimpleButton key={index} weight={page === currPage ? 700 : 500} size={1.6} onClickFunc={() => setCurrPage(page)}>{page}</SimpleButton>
        )}
        <div style={{
            opacity: currPage < totalCount ? "100%" : "50%"
          }}>
          <SimpleButton weight={700} size={1.6} onClickFunc={() => {
            if (currPage < totalCount) { setCurrPage(currPage + 1) }
          }}>{">"}</SimpleButton>
        </div>
      </div>
    </div>
  )
}

export default PageSwitcher
