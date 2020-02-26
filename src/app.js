import "@clr/core/button";
import "@clr/core/icon";
import { ClarityIcons } from "@clr/core/icon-shapes";
import { pencilIcon } from "@clr/core/icon-shapes/shapes/pencil";

import { Elm } from "./Main.elm";

ClarityIcons.addIcons(pencilIcon);

var flags = {
  api: "http://localhost:4000",
}

Elm.Main.init({
  flags: flags,
});