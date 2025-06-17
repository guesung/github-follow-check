const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    if (error.message.includes('404')) {
      return '존재하지 않는 사용자입니다.';
    }
    if (error.message.includes('403')) {
      return 'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
    }
  }
  return '알 수 없는 오류가 발생했습니다.';
};

export default getErrorMessage;
