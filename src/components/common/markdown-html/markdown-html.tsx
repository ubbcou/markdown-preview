import { useMemo } from "react"
import styles from './style.module.css'
import classnames from 'classnames'
import 'github-markdown-css'

export function MarkdownHTML(props: {html?: string}) {

  const html = useMemo(() => {
    if (!props.html) {
      return '<p>选择的 .md 文件不会上传到服务器，内容仅在当前浏览器中呈现。'
    }
    return props.html
  }, [props.html])
  return (
    <div className={styles.content}>
      <div className={classnames(styles.content_body, 'markdown-body')} dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  )
}
