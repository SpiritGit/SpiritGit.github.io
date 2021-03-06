import React, { useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import './index.css'

export const GROUP_TITLES = {
  'python': 'Python之于数据科学',
  'java': '大数据中的Java编程',
  'apache_flink': '顶级开源流处理引擎flink',
  'DSA': '数据结构与算法',
  'tech_ramble': '技术杂谈',
  'general_algorithm': '通用算法',

  'paper': '发表论文',
  'patent': '发明专利',
  'research': '研究广场',

  'share': '转载与分享',

  'non-tech': '日常杂谈'
}

export default function ArticleNavigator({ currArticle }) {
  const articleGroups = useStaticQuery(graphql`
    query {
      allFile {
        group(field: relativeDirectory) {
          nodes {
            childMdx {
              slug
              frontmatter {
                title
              }
            }
          }
          fieldValue
        }
      }
    }
  `).allFile.group.filter(({ fieldValue }) => {
    if (currArticle.slug.startsWith('non-tech')) {
      return fieldValue === 'non-tech'
    } 
    // 新增
    else if (currArticle.slug.startsWith('share')) {
      return fieldValue === 'share'
    } 
    else if (currArticle.slug.startsWith('research')) {
      return fieldValue === 'paper'  | fieldValue === 'patent' | fieldValue === 'research' 
    }
    else if (currArticle.slug.startsWith('paper')) {
      return  fieldValue === 'paper'  |  fieldValue === 'patent' | fieldValue === 'research'
    }
    else if (currArticle.slug.startsWith('patent')) {
      return  fieldValue === 'paper' | fieldValue === 'patent'  | fieldValue === 'research'
    }
    // 截至此处
    else {
      return fieldValue !== 'non-tech' & fieldValue !== 'research' & fieldValue !== 'paper' & fieldValue !== 'patent' & fieldValue !== 'share'
      
    }
  })

  const ref = useRef()
  const switchRef = useRef()

  function toggleTableOfContent() {
    ref.current.classList.toggle('article-navigator-visible')
  }

  useEffect(() => {
    const handler = e => {
      const { target } = e
      if (
        !switchRef.current.contains(target) &&
        !ref.current.contains(target)
      ) {
        ref.current.classList.remove('article-navigator-visible')
      }
    }
    window.addEventListener('mousedown', handler)
    return () => {
      window.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <>
      <div
        className="article-navigator-switch"
        ref={switchRef}
        onClick={toggleTableOfContent}
      >
        <FontAwesomeIcon icon={faList} />
      </div>
      <div className="article-navigator" ref={ref}>
        {articleGroups.map((articleGroup, idx) => {
          const groupTitle = GROUP_TITLES[articleGroup.fieldValue]
          const articles = articleGroup.nodes
            .map(({ childMdx }) => ({
              slug: childMdx.slug,
              title: childMdx.frontmatter.title,
            }))
            .sort((a, b) => a.slug.localeCompare(b.slug))
          return (
            <React.Fragment key={idx}>
              <h4>{groupTitle}</h4>
              {articles.map(({ slug, title }, idx) => (
                <p
                  key={idx}
                  onClick={() => navigate('/articles/' + slug)}
                  title={title}
                  className={
                    currArticle.slug === slug
                      ? 'highlighted-navigator-item'
                      : ''
                  }
                >
                  {title}
                </p>
              ))}
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}
