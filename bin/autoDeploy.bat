call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/xianren68/xianren68.github.io.git master:gh-pages
