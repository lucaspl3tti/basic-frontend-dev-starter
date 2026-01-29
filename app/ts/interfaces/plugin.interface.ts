import Plugin from '../plugin-system/plugin.class.ts';

/**
 * ##### Define default plugin interfaces
 */
// Interface for plugin options Object
export type PluginInterface = Function & { options: { [key: string]: any } };

export interface PluginOptions {
  [key: string]: any
}

// Interface for element create options
export interface ElementCreateOptions {
  id?: string
  classes?: string | string[]
  text?: string
  dataset?: object
  [key: string]: any
}

// Interface for items in the plugin queue
export interface PluginQueueItem {
  [index: string]: PluginAsyncLoader | PluginConstructor
}

// Interface for plugin queue
export interface PluginQueue {
  [index: string]: PluginQueueItem
}

export type PluginAsyncLoader = () => Promise<{ default: PluginConstructor }>;
export type PluginConstructor = new (element: HTMLElement, name: string) => Plugin;
