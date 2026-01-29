import { PluginInterface, PluginOptions } from '@ts/interfaces/plugin.interface.ts';
import Formatting from '@helpers/helper/formatting.helper.ts';
import deepmerge from 'deepmerge';

/**
 * ##### Default plugin class on which every plugin will be build on
 */
export default abstract class Plugin {
  public _el: HTMLElement | undefined;
  private _name: string;
  public _options: PluginOptions;

  /**
   * Plugin constructor method
   */
  public constructor(element: HTMLElement, name: string) {
    const pluginConstructor = this.constructor as PluginInterface;

    this._name = name;
    this._el = element;

    const options = pluginConstructor.options || {};
    this._options = this.mergeOptions(options);
  }

  mergeOptions(options: PluginOptions): PluginOptions {
    const dashedPluginName = Formatting.camelToDashCase(this._name);
    const dataAttributeOptions =
      this.el.getAttribute(`data-${dashedPluginName}-options`) || '{}';

    const merge = [
      options,
    ];

    try {
      if (dataAttributeOptions) {
        merge.push(JSON.parse(dataAttributeOptions));
      }
    } catch (error: any) {
      // eslint-disable-next-line max-len
      throw new Error(`The data attribute "data-${dashedPluginName}-options" could not be parsed to json: ${error.message}`);
    }

    return deepmerge.all(
      merge
        .filter(config => {
          return config instanceof Object && !(config instanceof Array);
        })
        .map(config => config || {}),
    );
  }

  get name(): string {
    return this._name;
  }

  get el(): HTMLElement {
    if (this._el === undefined) {
      throw new Error('Element is not defined');
    }

    return this._el;
  }

  get options(): PluginOptions {
    if (this._options === undefined) {
      throw new Error(`Options for the plugin "${this._name}" are not defined`);
    }

    return this._options;
  }

  initialize() {
    throw new Error(
      `The "initialize" method for the plugin "${this._name}" is not defined.`,
    );
  }
}
