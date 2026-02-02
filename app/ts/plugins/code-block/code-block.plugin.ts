import { Dom } from '@lucaspl3tti/ts-helpers';
import { Utilities } from '@lucaspl3tti/ts-helpers';
import Plugin from '@ts/plugin-system/plugin.class.ts';

// import highlight.js
import syntaxHighlighter from '@ts/vendor/highlight.js/highlightJS.ts';

/**
 * This plugin handles the custom code block functionality
 */
export default class CodeBlockPlugin extends Plugin {
  static options = {
    codeBlock: '',
    codeLanguage: 'javascript',

    selectors: {
      codeElement: '.code-block__code',
    },
  };

  codeLanguage: string;
  codeValue: string;
  codeElement: HTMLElement;
  codeBlockCopyBtn: HTMLElement;

  async initialize() {
    this.codeLanguage = this.options.codeLanguage;
    this.codeValue = this.options.codeBlock;

    this.queryInitialElements();
    this.addCodeBlockElements();
    this.registerEvents();
    this.highlightCode();
  }

  queryInitialElements() {
    const { selectors } = this.options;

    this.codeElement = Dom.get(this.el, selectors.codeElement)!;
  }

  addCodeBlockElements() {
    // eslint-disable-next-line
    const codeBlockTitle = Dom.createElement(
      'div',
      {
        class: 'code-block__title',
        text: this.codeLanguage,
      },
      this.el,
    );

    this.codeBlockCopyBtn = Dom.createElement(
      'div',
      {
        class: ['code-block__copy'],
        text: 'copy',
      },
      this.el,
    );
  }

  registerEvents() {
    Dom.listenTo(this.codeBlockCopyBtn, 'click', () => {
      this.onClickCopyCodeBtn();
    });
  }

  async onClickCopyCodeBtn() {
    navigator.clipboard.writeText(this.codeValue);

    this.codeBlockCopyBtn.textContent = 'copied';
    await Utilities.delay(1000);
    this.codeBlockCopyBtn.textContent = 'copy';
  }

  highlightCode() {
    const highlightedCode = syntaxHighlighter.highlight(
      this.codeValue,
      { language: this.codeLanguage },
    ).value;

    this.codeElement.innerHTML = highlightedCode;
  }
}
