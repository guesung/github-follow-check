import { useState, useCallback } from 'react';
import type { FollowAnalysisState } from '../types/github';
import { fetchUser, fetchFollowers, fetchFollowing } from '../services/githubApi';

const initialState: FollowAnalysisState = {
  user: null,
  followers: [],
  following: [],
  isLoading: false,
  error: null,
};

export const useGitHubFollowAnalysis = () => {
  const [state, setState] = useState<FollowAnalysisState>(initialState);

  const analyzeUser = useCallback(async (username: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const [user, followers, following] = await Promise.all([
        fetchUser(username),
        fetchFollowers(username),
        fetchFollowing(username),
      ]);
      setState({
        user,
        followers,
        following,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : '알 수 없는 오류',
      }));
    }
  }, []);

  return { ...state, analyzeUser };
};
