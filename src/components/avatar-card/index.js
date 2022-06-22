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
      content: <div>2014 ~ 2018 - 天津理工大学 - 保险精算 </div>,
    },
    {
      label: '硕士',
      content: <div>2018 ~ 2021 - 南京审计大学 - 统计学</div>,
    },
    {
      label: '2021.05 ~ 至今',
      content: <div>南京感动科技有限公司 - 智慧交通研究中心 - 算法工程师<br/>
                <p>主要负责或参与项目：</p>
                <p>
                  1. 多来源数据实时融合<br/>
                  用途：对多个交通观测数据进行实时融合，以提升数据准确性及信息量<br/>
                  关键词：flink，java，kafka，redis，clickhouse，postgresql，topology
                </p>
                <p>2. 车辆实时及历史轨迹计算</p>
                <p>3. 车辆实时位置追踪及预测系统</p>
                <p>4. 多来源路况数据实时融合</p>
                <p>5. 实时及历史交通流指标计算与分析</p>
                <p>6. 空间基础数据及空间算法</p>
                <p>7. 路网及观测设备拓扑结构构建</p>
                <p>8. 交通本体及知识图谱构建</p>
                <p>9. 车辆画像构建</p>
               </div>,
    },
  ],
}

const PROJECTS = {
  Chinese: [

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/paper/aCoverOfPaper"
        >
          我的论文集
        </a>
      ), 
      content: (
        <span>
          记录学习及工作生涯中的若干发表论文，目前主要涉及风险，精算，信用等领域，欢迎阅读与引用
          <s>（主要增加引用量就是了）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/patent/aCoverOfPatent"
        >
          我的专利集
        </a>
      ) ,
      content: (
        <span>
          工作生涯中若干绝妙的发明创造，故转化为专利<s>（不能浪费，虽然都归单位所有）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/python/WhyPython"
        >
          数学科学中的Python
        </a>
      ),
      content: (
        <span>
          Python编程教学<s>（不能浪费，虽然都归单位所有）</s>
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/java/WhyJava"
        >
          大数据中的Java编程: 实用教程
        </a>
      ), 
      content: (
        <span>
          大数据中的Java编程: 实用教程<s>（不能浪费，虽然都归单位所有）</s>
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/apache_flink/WhyFlink"
        >
          顶级开源流处理引擎flink: 实用教程
        </a>
      ),
      content: (
        <span>
          大数据中的Java编程: 实用教程<s>（不能浪费，虽然都归单位所有）</s>
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/DSA/what"
        >
          数据结构与算法
        </a>
      ),
      content: (
        <span>
          数据结构与算法<s>（不能浪费，虽然都归单位所有）</s>
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/share/aCoverOfShare"
        >
          分享与转载
        </a>
      ), 
      content: (
        <span>
          分享与转载<s>（不能浪费，虽然都归单位所有）</s>
        </span>
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
