import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const markdown = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.vitepress') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.md')) markdown.push(full)
  }
}
walk(root)
let broken = 0
for (const file of markdown) {
  const text = fs.readFileSync(file, 'utf8')
  const matches = text.matchAll(/\[[^\]]+\]\((?!https?:|#)([^)]+)\)/g)
  for (const m of matches) {
    const target = m[1].split('#')[0]
    if (!target) continue
    const resolved = path.resolve(path.dirname(file), target)
    const candidates = [resolved, `${resolved}.md`, path.join(resolved, 'index.md')]
    if (!candidates.some(fs.existsSync)) {
      console.error(`Broken link in ${path.relative(root, file)} -> ${m[1]}`)
      broken++
    }
  }
}
if (broken) process.exit(1)
console.log(`Checked ${markdown.length} Markdown files: OK`)
