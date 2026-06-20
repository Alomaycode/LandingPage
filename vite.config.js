import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubPagesProject =
  process.env.GITHUB_ACTIONS === 'true' &&
  repoName &&
  !repoName.endsWith('.github.io')

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: isGitHubPagesProject ? `/${repoName}/` : '/',
})
