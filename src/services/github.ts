import AxiosApi from "./axios";

class GithubApi extends AxiosApi {
  private static instance: GithubApi;

  constructor() {
    super(); 
  }

  public async fetchPosts() {
    const response = this.getAxiosInstance().get('https://api.github.com/repos/ahmdsabbir/react-blog/issues')
    return response;
  }

  public static getInstance(): GithubApi {
    if (!this.instance) {
      this.instance = new GithubApi();
    }

    return this.instance;
  }
}


export default GithubApi.getInstance();