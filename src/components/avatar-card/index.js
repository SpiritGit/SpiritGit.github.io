import React, { useContext } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import avatar from '../../images/avatar.png'
import { languageContext } from '../base-layout'
import ItemList from '../item-list'
import './index.css'

const SELF_INTROS = {
  Chinese: [<div>你好，我是王鑫之。欢迎来到我的博客。</div>],
}

const CAREER = {
  Chinese: [
    {
      label: '本科',
      content: <div>天津理工大学 - 保险精算 </div>,
    },
    {
      label: '硕士',
      content: <div>南京审计大学 - 统计学</div>,
    },
    {
      label: '2021.05 ~ 至今',
      content: <div>南京感动科技有限公司 - 智慧交通研究中心 - 算法工程师</div>,
    },
  ],
}

const PROJECTS = {
  Chinese: [
    {
      label: '数据科学中的Python编程',
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/Python/test"
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
      <h2 className="homepage-title">我的博客</h2>
      <ItemList items={PROJECTS[language]} />
      <h2 className="homepage-title">生涯</h2>
      <ItemList items={CAREER[language]} />
    </main>
  )
}
