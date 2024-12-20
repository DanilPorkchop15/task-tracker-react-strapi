import type Decoder from "jsonous";
import { pipe } from "ramda";

import { responseBodyDecoder } from "../api";
import type { ResponseBody } from "../model";

export function applyDecoder<T>(decoder: Decoder<T>): (data: unknown) => T {
  return (data) => {
    const [result, decoderError] = decoder.decodeAny(data).cata<[T, null] | [null, string]>({
      Ok: (val) => [val, null],
      Err: (err) => [null, err],
    });

    if (result) {
      return result;
    }

    throw new Error(`Response parsing error: ${decoderError}`);
  };
}

export function applyResponseDecoder<T>(decoder: Decoder<T>): (data: unknown) => ResponseBody<T> {
  return pipe(responseBodyDecoder, applyDecoder)(decoder);
}
