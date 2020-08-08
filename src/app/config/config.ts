import { IConfigType } from './IConfigType';

const ipConfig = '10.0.0.218';
const ipLocal = 'localhost';

export const config: IConfigType = {
  baseURL: `http://${ipLocal}:8080/`,
};

export const redirectErrorPage = (status) => {
  console.info(status);
  if (status !== 200) {
    window.location.href = '/**';
  }
  return status;
};
