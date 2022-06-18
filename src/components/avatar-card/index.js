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
      content: <div>南京感动科技有限公司 - 智慧交通研究中心 - 算法工程师<br/>
                <p>主要负责或参与项目：</p>
                <p>
                  1. 多来源数据实时融合<br/>
                  用途：对多个交通观测数据进行实时融合，以提升数据准确性及信息量<br/>
                  关键词：flink，java，kafka，redis，clickhouse，postgresql
                </p>
                <p>2. 车辆实时及历史轨迹计算</p>
                <p>3. 车辆实时位置追踪及预测系统</p>
                <p>4. 多来源路况数据实时融合</p>
                <p>5. 实时及历史交通流指标计算与分析</p>
                <p>6. 空间基础数据及空间算法</p>
                <p>7. 路网及观测设备拓扑结构构建</p>
                <p>8. 交通本体及知识图谱构建</p>
               </div>,
    },
  ],
}

const PROJECTS = {
  Chinese: [

    {
      // label: 
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/1Paper/1CoverOfPaper"
        >
          我的论文集
        </a>
      ),
    },


    {
      // label: 
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/2Patent/1CoverOfPatent"
        >
          我的专利集
        </a>
      ),
    },


    {
      // label: 
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/3Python/WhyPython"
        >
          数据科学中的Python编程: 实用教程
        </a>
      ),
    },

    {
      // label: 
      content: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/4Java/WhyJava"
        >
          大数据中的Java编程: 实用教程
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
