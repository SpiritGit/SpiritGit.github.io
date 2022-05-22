import { Link, navigate } from 'gatsby'
import avatar from '../../images/avatar.png'
import React, { useEffect, useRef } from 'react'
import './index.css'

export default function Header() {
  const lampRef = useRef()

  function changeTheme() {
    const theme = document.documentElement.dataset.theme
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    document.documentElement.dataset.theme = newTheme
  }

  useEffect(() => {
    const lamp = lampRef.current
    const target = document.querySelector('.lamp-base')
    lamp.onmousedown = () => {
      target.classList.add('lamp-base-down')
    }
    lamp.onmouseup = () => {
      target.classList.remove('lamp-base-down')
    }

    lamp.onclick = () => {
      changeTheme()
    }
  }, [])

  return (
    <>
      <header className="navbar">
        <nav>
          <div
            className="nav-link"
            onClick={() => {
              navigate('/about')
            }}
          >
            <img alt="avatar" src={avatar} />{' '}
            <span className="img-label">Spirit</span>
          </div>
          <Link to="/" className="nav-link" activeClassName="link-active">
            <span className="link-label">技术</span>
          </Link>
          <Link
            to="/non-tech/"
            className="nav-link"
            activeClassName="link-active"
          >
            <span className="link-label">杂谈</span>
          </Link>

          <div className="nav-link" ref={lampRef}>
            <button className="lamp" aria-pressed="true" type="button">
              <span className="lamp-base"></span>
              <span className="lamp-neck"></span>
              <span className="lamp-head"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
