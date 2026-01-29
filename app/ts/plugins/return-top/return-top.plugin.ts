import Dom from '@helpers/helper/dom.helper';
import Plugin from '@ts/plugin-system/plugin.class.ts';

/**
 * This plugin handles the custom navbar functionality
 */
export default class ReturnTopPlugin extends Plugin {
  static options = {
    classes: {
      show: 'show',
    },
  };

  scrolled: boolean;

  initialize() {
    this.scrolled = scrollY > 400;

    this.toggleButton();
    this.registerEvents();
  }

  registerEvents() {
    Dom.listenTo(window, 'scroll', () => {
      this.scrolled = scrollY > 400;
      this.toggleButton();
    });

    Dom.listenTo(this.el, 'click', () => {
      this.onClickReturnTop();
    });
  }

  toggleButton() {
    const { classes } = this.options;

    if (this.scrolled) {
      Dom.addClass(this.el, classes.show);
    } else {
      Dom.removeClass(this.el, classes.show);
    }
  }

  onClickReturnTop() {
    if (!this.scrolled) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
