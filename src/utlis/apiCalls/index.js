const fetchGitRepo = (repo, path) => {
  const gitURL = 'https://api.github.com/';
  const url = `${gitURL}repos/tomkingkong/${repo}/contents/public?ref=master`
  return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch(error => error);
}