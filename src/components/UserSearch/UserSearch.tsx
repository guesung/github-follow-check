import React, { useState } from 'react';

export interface UserSearchProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="GitHub 사용자명 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input input-bordered px-2 py-1 rounded border"
        disabled={isLoading}
        aria-label="GitHub 사용자명 입력"
      />
      <button
        type="submit"
        className="btn btn-primary px-4 py-1 rounded"
        disabled={isLoading || !input.trim()}
      >
        {isLoading ? '검색 중...' : '검색'}
      </button>
    </form>
  );
};

export default UserSearch;
