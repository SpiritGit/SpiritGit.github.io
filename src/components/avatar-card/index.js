import React, { useContext } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import avatar from '../../images/avatar.png'
import { languageContext } from '../base-layout'
import ItemList from '../item-list'
import './index.css'

const SELF_INTROS = {
  Chinese: [<div>你好，我是Spirit。欢迎来到这个博客。</div>],
}

const CAREER = {
  Chinese: [
    {
      label: '本科',
      content: <div>XX大学 - xxxx - xxxx ）</div>,
    },
    {
      label: '硕士',
      content: <div>XX大学 - xxxx - xxxx</div>,
    },
    {
      label: 'xxx ~ xxx',
      content: <div>xxxx公司 - xxxx - xxxx</div>,
    },
    {
      label: 'xxx ~ 至今',
      content: <div>xxxx公司 - xxxx - xxxx</div>,
    },
  ],
}

const PROJECTS = {
  Chinese: [
    {
      label: '基于gatsby开发的静态博客',
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="https://github.com/SpiritGit/SpiritGit.github.io"
        >
          xxxxx
        </a>
      ),
    },
  ],
}

export default function AvatarCard() {
  const language = useContext(languageContext)

  return (
    <main>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: 24, marginTop: 18 }}>
        Hey, I'm Spirit.
      </h2>
      {SELF_INTROS[language].map((content, idx) => (
        <div key={idx}>{content}</div>
      ))}
      <h2 className="homepage-title">开源项目</h2>
      <ItemList items={PROJECTS[language]} />
      <h2 className="homepage-title">生涯</h2>
      <ItemList items={CAREER[language]} />
    </main>
  )
}
