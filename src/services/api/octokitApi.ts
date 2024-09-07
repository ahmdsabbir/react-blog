import { Octokit } from "octokit";

class OctokitApi {
  private octokitInstance: Octokit;

  constructor() {
    this.octokitInstance = new Octokit();
  }

  public getApiInstance() {
    return this.octokitInstance;
  }
}

export default OctokitApi;