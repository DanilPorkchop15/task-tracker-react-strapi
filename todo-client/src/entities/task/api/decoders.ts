import Decoder, { boolean, field, number, string, succeed } from "jsonous";

import { userDecoder } from "../../user/@x";
import { Task } from "../interfaces";

export const taskDecoder: Decoder<Task> = succeed({})
  .assign("id", field("id", number))
  .assign("documentId", field("documentId", string))
  .assign("title", field("title", string))
  .assign("completed", field("completed", boolean))
  .assign("user", field("user", userDecoder));
