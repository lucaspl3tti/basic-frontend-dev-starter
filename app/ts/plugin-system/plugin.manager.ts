import type {
  PluginAsyncLoader,
  PluginConstructor,
  PluginQueue,
} from '@ts/interfaces/plugin.interface.ts';

/**
 * ##### Plugin Manager used to easily register and initialize plugins
 */
export default class PluginManager {
  private pluginQueue: PluginQueue;
  private documentLoaded: boolean;

  /**
   * Plugin manager constructor method
   */
  constructor() {
    this.pluginQueue = {};
    this.documentLoaded = false;

    document.addEventListener('DOMContentLoaded', () => {
      this.initializePlugins();
    });
  }

  /**
   * Function to register a given plugin
   */
  registerPlugin(
    pluginOrAsyncCallback: PluginConstructor | PluginAsyncLoader,
    pluginName: string,
    selector: string,
  ): void {
    if (this.documentLoaded) {
      return;
    }

    if (this.pluginQueue[pluginName] === undefined) {
      this.pluginQueue[pluginName] = {};
    }

    this.pluginQueue[pluginName][selector] = pluginOrAsyncCallback;
  }

  /**
   * Function to initialize all registered plugins
   */
  public initializePlugins(): void {
    if (this.documentLoaded) {
      return;
    }

    this.documentLoaded = true;

    for (const pluginName in this.pluginQueue) {
      const pluginQueueItem = this.pluginQueue[pluginName];

      for (const pluginSelector in pluginQueueItem) {
        this.initializePlugin(
          pluginSelector,
          pluginName,
          pluginQueueItem[pluginSelector],
        );
      }
    }
  }

  /**
   * Function to initialize one plugin
   */
  public async initializePlugin(
    pluginSelector: string,
    pluginName: string,
    pluginOrAsyncCallback: PluginConstructor | PluginAsyncLoader,
  ): Promise<void> {
    const elements = document.querySelectorAll(pluginSelector);

    if (elements.length === 0) {
      return;
    }

    let pluginClass: PluginConstructor;
    const isAsyncLoader = typeof pluginOrAsyncCallback === 'function'
      && (pluginOrAsyncCallback as any).prototype === undefined;

    if (isAsyncLoader) {
      const module = await (pluginOrAsyncCallback as PluginAsyncLoader)();
      pluginClass = module.default;
    } else {
      pluginClass = pluginOrAsyncCallback as PluginConstructor;
    }

    elements.forEach((element: Element) => {
      const pluginEl = element as HTMLElement;
      const plugin = new pluginClass(pluginEl, pluginName);

      plugin.initialize();
    });
  }
}
