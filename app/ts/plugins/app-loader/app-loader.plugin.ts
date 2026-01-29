import Dom from '@helpers/helper/dom.helper';
import Utilities from '@helpers/helper/utilities.helper';
import Plugin from '@ts/plugin-system/plugin.class.ts';

/**
 * This plugin handles the custom app loader functionality
 */
export default class AppLoaderPlugin extends Plugin {
  static options = {
    loaderSpeed: Utilities.getRandomNumber(550, 1200),
    appDisplayStyle: 'flex',

    classes: {
      active: 'app-loader--active',
    },
  };

  async initialize() {
    this.processLoader();
  }

  async processLoader() {
    const { loaderSpeed } = this.options;

    await Utilities.delay(loaderSpeed);
    this.hideLoader();
  }

  async hideLoader() {
    const { classes, appDisplayStyle } = this.options;
    const appContainer = Dom.get(document, '#app')!;

    Dom.setStyle(this.el, 'opacity', '0');
    Dom.setStyle(appContainer, 'display', appDisplayStyle);
    await Utilities.delay(330);
    Dom.removeClass(this.el, classes.active);
  }
}
