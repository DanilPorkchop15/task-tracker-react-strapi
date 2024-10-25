import Decoder, { array, field, number, string, succeed } from "jsonous";

import type { User } from "../interfaces";

export const userDecoder: Decoder<User> = succeed({})
  .assign("id", field("id", number))
  .assign("username", field("username", string));

export const usersDecoder: Decoder<User[]> = array(userDecoder);
