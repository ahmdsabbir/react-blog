import GithubApi from "../../services/api/github";
import Markdown from "markdown-to-jsx";
import { IssueData } from "../../services/api/interfaces/github.interface";

const response = await GithubApi.fetchIssues({
  per_page: 3,
  page: 1,
});
const data = response.data as IssueData[];

console.log(data);

let blogContent: string = "";

data.forEach((issue) => {
  if (issue && issue.labels.map((l) => l.name).includes('post')) {
    blogContent = blogContent + `<li><a href="${issue.url}">${issue.title}</a></li>`
  }
});

function Blog() {
  return <Markdown>{blogContent}</Markdown>;
}

export default Blog;
