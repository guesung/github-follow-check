import type { GitHubUser } from '../types/github';

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`GitHub API Error: ${response.status}`);
  }
  return response.json();
};

const fetchAllPages = async (url: string): Promise<GitHubUser[]> => {
  let results: GitHubUser[] = [];
  let nextUrl: string | null = url;
  while (nextUrl) {
    const response = await fetch(nextUrl);
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }
    const data: GitHubUser[] = await response.json();
    results = results.concat(data);
    // Link 헤더에서 next page 추출
    const link = response.headers.get('link');
    if (link && link.includes('rel="next"')) {
      const match = link.match(/<([^>]+)>; rel="next"/);
      nextUrl = match ? match[1] : null;
    } else {
      nextUrl = null;
    }
  }
  return results;
};

export const fetchFollowers = async (username: string): Promise<GitHubUser[]> => {
  const url = `https://api.github.com/users/${username}/followers?per_page=100`;
  return fetchAllPages(url);
};

export const fetchFollowing = async (username: string): Promise<GitHubUser[]> => {
  const url = `https://api.github.com/users/${username}/following?per_page=100`;
  return fetchAllPages(url);
};
