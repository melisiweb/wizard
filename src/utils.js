import { useParams } from 'react-router-dom';

/**
 *
 * @param {Array<string>} keys
 */
export const useParamsInt = (keys = []) => {
  /** @type {*} */
  const rowParams = useParams();
  /** @type {*} */
  const params = {};
  keys.forEach(key => {
    if (rowParams[key]) {
      params[key] = rowParams[key] ? parseInt(rowParams[key]) : undefined;
    }
  });

  return params;
};