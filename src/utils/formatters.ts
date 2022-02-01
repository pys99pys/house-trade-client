export const amountFormat = (amount: number): string => {
  const dividedOneHundredMillion = amount / 100000000;

  if (dividedOneHundredMillion < 0) {
    return `${Math.floor(dividedOneHundredMillion * 10)}천만원`;
  }

  return `${Math.floor(dividedOneHundredMillion * 10) / 10}억원`;
};

export const averageAmountFormat = (amount: number): string => {
  return `${Math.floor(amount / 10000).toLocaleString("ko-kr")}만원/평`;
};
