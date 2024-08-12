import { Component } from "./component"
import { RootRendererFunction } from "./renderer"

export interface App<HostElement = any> {
  mount(rootContainer: HostElement | string): void
}

export type CreateAppFunction<HostElement> = (
  rootComponent: Component
) => App<HostElement>

export function createAppAPI<HostElement>(
  render: RootRendererFunction<HostElement>
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent) {
    const app: App = {
      mount(rootContainer: HostElement) {
        const message = rootComponent.render!()
        render(message, rootContainer)
      }
    }

    return app
  }
}
