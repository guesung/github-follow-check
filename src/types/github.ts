export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface FollowAnalysisState {
  user: GitHubUser | null;
  followers: GitHubUser[];
  following: GitHubUser[];
  isLoading: boolean;
  error: string | null;
}
