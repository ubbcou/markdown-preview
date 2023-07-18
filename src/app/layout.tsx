import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Markdown Preview',
  description: '在浏览器中，使用 github markdown 样式预览 .md 文件内容',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <main>{children}</main>
          <footer className={styles.footer}>
            <div className={styles.footer_content}>/(ㄒoㄒ)/~~</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
