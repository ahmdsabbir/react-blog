import { RequestParameters } from "@octokit/types";
import OctokitApi from "./octokitApi";
import { appConfig } from "../../config/app.config";

class GithubApi extends OctokitApi {
  private static instance: GithubApi;
  private owner: string;
  private repo: string;

  constructor() {
    super();
    this.owner = appConfig.OWNER;
    this.repo = appConfig.REPOSITORY;
  }

  public async fetchIssues(options: RequestParameters) {
    return this.getApiInstance().request(`GET /repos/${this.owner}/${this.repo}/issues`, options)
  }

  public static getInstance(): GithubApi {
    if (!this.instance) {
      this.instance = new GithubApi();
    }

    return this.instance;
  }
}


export default GithubApi.getInstance();