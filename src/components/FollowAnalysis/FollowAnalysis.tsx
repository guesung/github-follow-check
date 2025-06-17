import React from 'react';
import type { GitHubUser } from '../../types/github';

interface FollowAnalysisProps {
  user: GitHubUser | null;
  followers: GitHubUser[];
  following: GitHubUser[];
  isLoading: boolean;
  error: string | null;
}

const FollowAnalysis: React.FC<FollowAnalysisProps> = ({ user, followers, following, isLoading, error }) => {
  if (isLoading) {
    return <div className="py-8 text-center">로딩 중...</div>;
  }
  if (error) {
    return <div className="py-8 text-center text-red-500">{error}</div>;
  }
  if (!user) {
    return <div className="py-8 text-center text-gray-400">사용자를 검색해 주세요.</div>;
  }
  return (
    <div className="mt-6">
      <div className="flex items-center gap-4 mb-4">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">{user.login}</a>
          <div className="text-sm text-gray-500">ID: {user.id}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="font-semibold mb-2">팔로워 ({followers.length})</div>
          <ul className="max-h-48 overflow-auto border rounded p-2 bg-white">
            {followers.length === 0 ? (
              <li className="text-gray-400">팔로워 없음</li>
            ) : (
              followers.map((f) => (
                <li key={f.login} className="flex items-center gap-2 py-1">
                  <img src={f.avatar_url} alt={f.login} className="w-6 h-6 rounded-full" />
                  <a href={f.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{f.login}</a>
                </li>
              ))
            )}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">팔로잉 ({following.length})</div>
          <ul className="max-h-48 overflow-auto border rounded p-2 bg-white">
            {following.length === 0 ? (
              <li className="text-gray-400">팔로잉 없음</li>
            ) : (
              following.map((f) => (
                <li key={f.login} className="flex items-center gap-2 py-1">
                  <img src={f.avatar_url} alt={f.login} className="w-6 h-6 rounded-full" />
                  <a href={f.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{f.login}</a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FollowAnalysis;
