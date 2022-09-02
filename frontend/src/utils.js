export const getError = (error) => {
  return error.response && error.response.data.messsage
    ? error.response.data.messsage
    : error.message;
};
