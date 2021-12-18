export const calendarFormat = (n: number) => {
  return n.toString().padStart(2, "0");
};

export const sizeFormat = (size: number): number => {
  const area = size * 0.3025;

  if (size < 84) {
    return Math.floor(area + 8);
  }

  return Math.floor(area + 9);
};

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
