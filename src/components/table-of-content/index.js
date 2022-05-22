import React, { useEffect, useRef, useState } from 'react'
import { YoutubeOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export default function TableOfContent({ headers }) {
  const ref = useRef()
  const switchRef = useRef()
  const contentRef = useRef()
  const [topHeaderKey, setTopHeaderKey] = useState(0)

  function toggleTableOfContent() {
    ref.current.classList.toggle('table-of-content-visible')
  }

  function handleClickHeader(event, header) {
    ref.current.classList.remove('table-of-content-visible')
    ref.current.scrollTo({
      behavior: 'smooth',
      top: event.target.offsetTop - 200,
    })
    header.target.scrollIntoView()
  }

  useEffect(() => {
    const scrollHandler = () => {
      let idx = 0
      for (const header of headers) {
        const top = header.target.getBoundingClientRect().top
        if (top > 0) break
        idx++
      }
      idx = Math.min(headers.length - 1, idx)
      setTopHeaderKey(idx)
      const topHeader = document.getElementById(`header-number-${idx}`)
      if (!topHeader) return
      contentRef.current.scrollTo({
        behavior: 'smooth',
        top: topHeader.offsetTop - 200,
      })
    }

    const scrollHandlerDebounced = debounce(scrollHandler, 150)

    document.addEventListener('scroll', scrollHandlerDebounced)

    return () => document.removeEventListener('scroll', scrollHandlerDebounced)
  }, [headers])

  useEffect(() => {
    const handler = e => {
      const { target } = e
      if (
        !switchRef.current.contains(target) &&
        !ref.current.contains(target)
      ) {
        ref.current.classList.remove('table-of-content-visible')
      }
    }
    window.addEventListener('mousedown', handler)
    return () => {
      window.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <>
      <div className="table-of-content" ref={ref}>
        <div className="table-of-content-header"></div>
        <div className="table-of-content-main" ref={contentRef}>
          {headers.map((header, idx) => (
            <p
              className={`header-level-${header.level} ${
                topHeaderKey === idx ? 'topHeader' : ''
              }`}
              id={`header-number-${idx}`}
              key={idx}
              onClick={event => {
                handleClickHeader(event, header)
              }}
            >
              {header.name === 'media' && <YoutubeOutlined />} {header.label}
            </p>
          ))}
        </div>
      </div>

      <div
        ref={switchRef}
        className="table-of-content-switch"
        onClick={toggleTableOfContent}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </>
  )
}
