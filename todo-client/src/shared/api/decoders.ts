import Decoder, { array, field, number, succeed } from "jsonous";
import { isNil } from "ramda";
import { ok } from "resulty";

import type { ResponseBody } from "../model";

export function fieldOrFallback<A, D extends A | null>(
  key: string,
  decoder: Decoder<A>,
  fallback: () => D | null = () => null,
): Decoder<A | D | null> {
  return new Decoder<A | D | null>((data: Record<string, unknown>) => {
    if (isNil(data[key])) return ok(fallback());
    return field(key, decoder)
      .decodeAny(data)
      .cata({
        Ok: (value) => ok<string, A | D | null>(value),
        Err: () => ok<string, D | null>(fallback()),
      });
  });
}

export const responseBodyDecoder = <T>(decoder: Decoder<T>): Decoder<ResponseBody<T>> => {
  return succeed({})
    .assign("data", field("data", array(decoder)))
    .assign(
      "meta",
      fieldOrFallback(
        "meta",
        succeed({}).assign(
          "pagination",
          fieldOrFallback(
            "pagination",
            succeed({})
              .assign("page", field("page", number))
              .assign("pageSize", field("pageSize", number))
              .assign("pageCount", field("pageCount", number))
              .assign("total", field("total", number)),
          ),
        ),
      ),
    );
};
