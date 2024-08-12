import { CreateAppFunction, createAppAPI, createRenderer } from "@koralle/runtime-core"
import { nodeOpts } from "./nodeOpts"

const { render } = createRenderer(nodeOpts)
const _createApp = createAppAPI(render)

export const createApp = ((...args) => {
  const app = _createApp(...args)
  const { mount } = app

  app.mount = (selector: string) => {
    const container = document.querySelector(selector)
    if (!container) return
    mount(container)
  }

  return app
}) as CreateAppFunction<Element>
