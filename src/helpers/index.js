
export const getStoryIntro = () => new Promise((resolve, reject) =>
  window.fetch('/intro.txt')
    .then(r => r.text())
    .then(resolve)
    .catch(reject)
)
