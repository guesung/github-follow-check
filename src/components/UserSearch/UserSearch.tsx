import { useState, FormEvent } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export interface UserSearchProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');
  const { trackEvent } = useAnalytics();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      trackEvent({
        action: 'search',
        category: 'user_interaction',
        label: username,
      });
      onSearch(username.trim());
    }
  };

  return (
   <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub 사용자명 입력"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? '검색 중...' : '검색'}
      </button>
    </form>
  );
};

export default UserSearch;
