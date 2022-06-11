import wechat from '../../images/wechat.jpg'
import React, { useEffect, useState } from 'react'
import resume from '../../static/resume/resume.pdf'
import resumeEn from '../../static/resume/resume-en.pdf'
import {
  MailFilled,
  QqCircleFilled,
  DownloadOutlined,
  GithubFilled,
  WechatFilled,
} from '@ant-design/icons'
import './index.css'


export default function Footer() {

  const [enableDownload, setEnableDownload] = useState(false);

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/about') {
      setEnableDownload(true)
    }
  }, [])



  return (
    <footer className="footer">
      <div className="wrapper">
        <div>
          <h3>Thanks for reading!</h3>
          <p>CopyRight &copy; 2022 Spirit - Present</p>
        </div>
        <div>
          <p style={{ fontSize: '1.3rem' }}>

            <span>
              <WechatFilled />
            </span>

            <span>
              <QqCircleFilled />
            </span>


            <span>
              <a href="mailto:w879020706@gmail.com">
                <MailFilled />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/SpiritGit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubFilled />
              </a>
            </span>
            {enableDownload && (
              <>
                <span>
                  <a href={resume} download="resume.pdf" title="简历下载">
                    <DownloadOutlined />
                  </a>
                </span>
                <span>
                  <a href={resumeEn} download="resume-en.pdf" title="resume">
                    <DownloadOutlined />
                  </a>
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
