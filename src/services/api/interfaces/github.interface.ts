type reactions = {
  plusOne: number;
  minusOne: number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number;
  url: string;
};

type label = {
  color: string;
  default: boolean;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

type user = {
  id: number;
  url: string;
  avatar_url: string;
  login: string;
  starred_url: string;
};

export interface IssueData {
  id: number;
  title: string;
  body: string;
  url: string;
  labels: label[];
  comments: number;
  comments_url: string;
  created_at: Date;
  updated_at: Date;
  reactions: reactions;
  repository_url: string;
  user: user;
}