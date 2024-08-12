import { RendererOptions } from "@koralle/runtime-core"

export const nodeOpts: RendererOptions<Node> = {
  setElementText(node, text) {
    node.textContent = text
  },
}
