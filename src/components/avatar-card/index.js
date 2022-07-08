import React, { useContext } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import avatar from '../../images/avatar.png'
import { languageContext } from '../base-layout'
import ItemList from '../item-list'
import './index.css'

const SELF_INTROS = {
  Chinese: [<div>你好，我是spirit，欢迎来到我的博客。</div>],
}

const CAREER = {
  Chinese: [
    {
      label: '本科',
      content: <div>
                  2014 ~ 2018 - 天津理工大学 - 保险精算
                  <p>
                    主修：保险学原理、保险法、保险精算、金融学等专业课，运筹学、高数、线代、概率等基础课，大学物理、工程力学、电工学等不知道为什么在课程表里的课。
                  </p>
                </div>,
    },
    {
      label: '硕士',
      content: <div>
                  2018 ~ 2021 - 南京审计大学 - 统计学
                  <p>
                    主要研究保险/金融风险相关领域，获得了一些奖，发表了一些论文，参见<a href='/articles/paper/aCoverOfPaper'>论文集</a>。
                    期间自学了Python用于数值模拟，逐渐脱离老本行入坑CS及大数据领域，算是半路出家兴趣使然走到现在。
                  </p>
                </div>,
    },
    {
      label: '2020.06 ~ 2020.08',
      content: <div>
                  中国平安江苏分公司 - 车险部 - 数据分析（实习）<br/>
                  <p>
                    主要负责：对江苏地区保费数据、理赔数据、公司自动化核保平台使用数据等进行综合分析，测算精算指标，给出公司政策效果评估，
                    并进行江苏地区车险市场保费预测，将业绩缺口下发各分支机构。
                  </p>
               </div>,
    },

    {
      label: '2020.12 ~ 2021.05',
      content: <div>
                  字节跳动 - 商业化 - 数据开发（实习）<br/>
                  <p>
                    主要负责：负责 Mysql 数据库的搭建与维护，使用 Python 爬取相关数据为业务决策提供数据支持，并部署自动化脚本到内部服务器，
                    实现自动化入库存储。搭建 Excel 自动化报表，并自动推送相关报表至飞书平台。 
                  </p>
               </div>,
    },
    {
      label: '2021.05 ~ 至今',
      content: <div>
                  南京感动科技有限公司 - 智慧交通研究中心 - 算法工程师<br/>
                  <p>
                    主要负责：空间计算领域，流式计算领域，数据分析，自研若干智能交通算法 <br/>
                    主要使用技术栈：Python，Jupyter，Java，Flink，Kafka，Redis，Postgres，Clickhouse，QGIS<br/>
                    更多内容点击下方下载按钮获取简历
                  </p>
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
          href="/articles/apache_flink/01WhyFlink"
        >
          顶级开源流处理引擎Flink
        </a>
      ),
      content: (
        <span>
          对学习与工作中使用到的Flink原理及技术做记录与总结
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/big_data_ramble/01What"
        >
          大数据杂谈
        </a>
      ),
      content: (
        <span>
          记录一些有趣的，有技术含量的大数据技术<s>（主要是无法归类，又想记，就都怼在这里了）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/DSA/01What"
        >
          数据结构与算法
        </a>
      ),
      content: (
        <span>
          一个非CS科班人士眼中的数据结构与算法<s>（理论上小白友好）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/general_algorithm/01What"
        >
          通用算法
        </a>
      ),
      content: (
        <span>
          介绍geohash，bitmap等通用算法，知识点较为零散，关键时刻用上了却是一把利器<s>（高效好用，zhuangbility）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/java/01WhyJava"
        >
          大数据中的Java编程
        </a>
      ), 
      content: (
        <span>
          自学Flink入坑了Java，发现Java在大数据领域的应用甚是广泛，如Hadoop、map-reduce，等多个开源项目都由Java编写，故作为主力语言之一进行学习
          <s>（当然，用的人多，面向google编程时优势巨大）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="/articles/python/01WhyPython"
        >
          Python之于数学科学
        </a>
      ),
      content: (
        <span>
          作为我的入门编程语言，感情颇深。其上手简单，开发迅速，语法精炼<s>（小白友好）</s>，功能强大，类库丰富<s>（无所不能）</s>，且内置类型非常容易操纵。
          在数据科学领域，以上特性帮助数据科学家专注于数据及理论自身，减少扣代码的工作量，从而广受好评。
          因此，本博客基于本人自学经历及工作实践，旁征博引<s>（抄抄教程抄抄书）</s>，对Python在数据科学领域的实践作介绍，欢迎阅读。
        </span>
      ),
    },


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
          href="/articles/research/aCoverOfOtherResearch"
        >
          其他研究
        </a>
      ) ,
      content: (
        <span>
          记录若干其他新奇想法与研究<s>（说不定就攒成了论文或专利呢）</s>
        </span>
      ),
    },


    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="http://localhost:8000/share/"
        >
          分享与转载
        </a>
      ), 
      content: (
        <span>
          分析前沿技术动向，主要包括白皮书，分析、研究报告等<s>（说不定写本子就用到了）</s>
        </span>
      ),
    },

    {
      label: (
        <a
          target="_blank"
          rel="noreferrer noopener nofollow"
          href="https://spiritgit.github.io/non-tech/"
        >
          我的杂谈
        </a>
      ), 
      content: (
        <span>
          啰里八嗦，嘚嘚嘚，有的没的
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
      <h2 className="homepage-title">博客索引</h2>
      <ItemList items={PROJECTS[language]} />
      <h2 className="homepage-title">我的生涯</h2>
      <ItemList items={CAREER[language]} />
    </main>
  )
}
