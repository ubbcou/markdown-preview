'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Tip } from '@/components/page'
import { MarkdownHTML } from '@/components/common'
import { getFileText, mdToHtml } from '@/utils'
import { useState } from 'react'

export default function Home() {
  const [html, setHtml] = useState('')

  async function handleFileChange(e: any) {
    const str = await getFileText(e)
    setHtml(mdToHtml(str))
  }

  return (
    <div className={styles.content}>
      <div className={styles.content_header}>
        <Tip />
      </div>

      <div className={styles.content_title}>
        Markdown Preview
      </div>

      <div className={styles.content_sections}>
        <label
          className={styles.content_section}
          htmlFor="uploadIpt"
        >
          <h2 className={styles.content_section_title}>
            上传{' '}
            <span className={styles.content_section_arrow}>
              -&gt;
            </span>
          </h2>
          <p className={styles.content_section_desc}>
            选择 .md 文件，预览内容在下方呈现 👀
          </p>
          <input className="hidden" accept=".md" type="file" id="uploadIpt" onChange={handleFileChange} />
        </label>
      </div>

      <MarkdownHTML html={html} />
    </div>
  )
}
