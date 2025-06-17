import React from 'react';
import UserSearch from './components/UserSearch/UserSearch';
import FollowAnalysis from './components/FollowAnalysis/FollowAnalysis';
import { useGitHubFollowAnalysis } from './hooks/useGitHubFollowAnalysis';
import getErrorMessage from './utils/getErrorMessage';

const App: React.FC = () => {
  const { user, followers, following, isLoading, error, analyzeUser } = useGitHubFollowAnalysis();

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center cursor-pointer" onClick={() => window.location.reload()}>GitHub Follow Check</h1>
      <UserSearch onSearch={analyzeUser} isLoading={isLoading} />
      <FollowAnalysis
        user={user}
        followers={followers}
        following={following}
        isLoading={isLoading}
        error={error ? getErrorMessage(error) : null}
      />
    </div>
  );
};

export default App;
