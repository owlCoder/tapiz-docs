import fs from 'node:fs'
import path from 'node:path'

const repo = process.argv[2]
if (!repo) {
  console.error('Usage: node scripts/extract-routes.mjs <path-to-tapiz-rest-api>')
  process.exit(1)
}

const routesDir = path.join(repo, 'src', 'Presentation', 'routes')
if (!fs.existsSync(routesDir)) {
  console.error(`Routes directory not found: ${routesDir}`)
  process.exit(1)
}

console.log('Route extraction in this generated repository is documented in api/routes.json.')
console.log('Extend this script with the same extraction rules used during initial generation when integrating into CI.')
