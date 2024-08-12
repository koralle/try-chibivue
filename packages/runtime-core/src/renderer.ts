export interface RendererNode {
  [key: string]: any
}

export interface RendererOptions<HostNode = RendererNode> {
  setElementText(node: HostNode, text: string): void
}

export interface RendererElement extends RendererNode {}

export type RootRendererFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement
) => void

export function createRenderer(options: RendererOptions) {
  const { setElementText: hostSetElementText } = options

  const render: RootRendererFunction = (message, container) => {
    hostSetElementText(container, message)
  }

  return { render }
}
