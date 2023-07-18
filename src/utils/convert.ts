import { marked } from 'marked'

/** 获取文件文本 */
export function getFileText(event: Event): Promise<string> {
  const file = (event.target as any)?.files[0]
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = function(event) {
      const fileText = event.target?.result
      resolve(fileText as string || '')
    }

    reader.onerror = function() {
      reject(new Error('get fail'))
    }

    reader.readAsText(file)
  })
}

/** markdown 转 html */
export function mdToHtml(str: string) {
  return marked.parse(str, {
    mangle: false,
    headerIds: false,
  });
}
