export const getTradeItems = async (date: string, stateCode: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_HOST}/trade/${stateCode}/${date}`
  );

  return await response.json();
};
