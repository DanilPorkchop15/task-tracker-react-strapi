import type { Method, Request } from "../model";

export const request = async <T extends object>(
  method: Method,
  url: string,
  requestData?: Request<T>,
): Promise<unknown> => {
  try {
    const res = await fetch(url, { method, ...requestData });
    if (res.ok) {
      return (await res.json()) as object;
    } else {
      throw new Error(`${method} request to ${url} failed with ${res.status} ${res.statusText}`);
    }
  } catch (e) {
    console.error(`${method} request error: `, e);
    throw e;
  }
};
