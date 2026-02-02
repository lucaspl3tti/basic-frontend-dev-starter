import { ArrayAccess } from '@lucaspl3tti/ts-helpers';
import { Dom } from '@lucaspl3tti/ts-helpers';
import { DeviceAccess } from '@lucaspl3tti/ts-helpers';
import { Formatting } from '@lucaspl3tti/ts-helpers';
import { Utilities } from '@lucaspl3tti/ts-helpers';
import Plugin from '@ts/plugin-system/plugin.class.ts';

/**
 * This is a demo ts plugin
 */
export default class DemoPlugin extends Plugin {
  // define global variables with default values
  private childTestText: HTMLElement | null = null;
  private dateElement: HTMLElement | null = null;
  private truncateString: HTMLElement | null = null;

  // define plugin options
  static options = {
    selectors: {
      childTest: '.parent-demo-text',
      parent: '.parent',
      button: '.btn',
      date: '.date',
      truncate: '.truncate',
    },

    classes: {
      newElement: 'new-element',
    },

    settings: {
      waitingTimeMilliseconds: 2000,
    },
  };

  // Initialize plugin
  initialize() {
    console.log(this.el) // eslint-disable-line
    console.log(this.options) // eslint-disable-line

    this.queryInitialElements();
    this.registerEvents();
    this.examples();
  }

  // get initial elements for global scope
  queryInitialElements() {
    const { selectors } = this.options;

    this.childTestText =
      Dom.get(this.el, selectors.childTest) as HTMLElement;

    this.dateElement = Dom.get(this.el, selectors.date) as HTMLElement;

    this.truncateString =
      Dom.get(this.el, selectors.truncate) as HTMLElement;

    const allElements: HTMLElement[] = [
      this.childTestText,
      this.dateElement,
      this.truncateString,
    ];

    console.log('all initial elements: ', allElements) // eslint-disable-line
  }

  // register all plugin events
  registerEvents() {
    window.onload = () => console.log('window loaded') // eslint-disable-line
  }

  /* eslint-disable */
  // example function to test helpers
  async examples() {
    this.DeviceAccessExamples()
    this.formatDateExample()
    this.truncateStringExample()
    this.isNodeExample()
    const parent = this.findParentExample() as HTMLElement
    this.getParentExample()
    this.createElementExample(parent)
    this.hideAndShowElementExample()
    this.getRandomNumberExample(parent)
    this.arrayHelperExamples()
    this.iterateExample()
  }

  // Exapmle for isTouchDevice helper function
  DeviceAccessExamples() {
    console.log('\n######## device detections examples ########')

    const isTouch = DeviceAccess.isTouch()
    console.log('Is touch device?: ', isTouch)
  }

  // Example for formatDate helper function
  formatDateExample() {
    if (!this.dateElement) return
    if (this.dateElement.textContent === '') return
    console.log('\n######## formatDate example ########')

    const dateText = this.dateElement.textContent?.trim()

    const timestamp = dateText || '2023/07/13'
    console.log('old timestamp: ', timestamp)

    this.dateElement.textContent = Formatting.formatDate(timestamp)

    console.log('new timestamp: ', this.dateElement.textContent)
  }

  truncateStringExample() {
    if (!this.truncateString) return
    console.log('\n######## truncateString example ########')

    const truncateStringText = this.truncateString?.textContent

    if (truncateStringText === null) return
    this.truncateString.textContent = Formatting.truncateString(truncateStringText, 70)
  }

  // Example for isNode helper function
  isNodeExample() {
    console.log('\n######## isNode example ########')

    const isNode = Dom.isNode(this.childTestText)
    console.log('element childTestText is node: ', isNode)
  }

  // Example for findParent by selector helper function
  findParentExample(): HTMLElement|null {
    console.log('\n######## findParent example ########')

    const { selectors } = this.options
    const child = this.childTestText as HTMLElement
    const parent = Dom.findParent(child, selectors.parent, 6)

    console.log('findParent parent element: ', parent)

    return parent
  }

  // Example for getParent helper function
  getParentExample() {
    console.log('\n######## getParent example ########')

    const child = this.childTestText as HTMLElement
    const parent = Dom.getParent(child, 3);

    console.log('getParent parent element: ', parent)
  }

  // Example for element create helper fucntion
  createElementExample(parent: HTMLElement) {
    console.log('\n######## createElement example ########')

    const { classes } = this.options

    const newElement = Dom.createElement('p', {
      'id': 'newElement',
      'classes': classes.newElement,
      'text': 'Child appended',
      'dataset': { test: true },
      'data-hi': 'hello'
    })

    parent?.appendChild(newElement)
    console.log(newElement)
  }

  // Example for element hide and show helper functions
  async hideAndShowElementExample() {
    console.log('\n######## hide and show element example ########')

    const { selectors, settings } = this.options

    const button = Dom.get(this.el, selectors.button) as HTMLElement
    console.log('button element: ', button)
    Dom.hideElement(button)

    await Utilities.delay(settings.waitingTimeMilliseconds)

    Dom.showElement(button)
  }

  getRandomNumberExample(parent: HTMLElement) {
    console.log('\n######## getRandomNumber example ########')

    const randomNumberElement = Dom.createElement('p', {
      'id': 'RandomNumber',
      'class': 'random-number',
    })

    const randomNumber = Utilities.getRandomNumber(6, 200)
    randomNumberElement.textContent = randomNumber.toString()

    parent?.appendChild(randomNumberElement)
    console.log(randomNumberElement.textContent)
  }

  arrayHelperExamples() {
    console.log('\n######## array helper examples ########')

    const demoArray = [1, 2, 3, 4, 5, 6]
    console.log(demoArray)

    // get first item in array
    const firstItem = ArrayAccess.first(demoArray)
    console.log(firstItem)

    // get first three items in array
    const first3Items = ArrayAccess.first(demoArray, 3)
    console.log(first3Items)

    // get last item in array
    const lastItem = ArrayAccess.last(demoArray)
    console.log(lastItem)

    // get last three items in array
    const last3Items = ArrayAccess.last(demoArray, 3)
    console.log(last3Items)
  }

  iterateExample() {
    console.log('\n######## iterate helper examples ########')

    // define demo object
    const object = {
      test: 1,
      lorem: 'ipsum'
    }

    // define demo array
    const array = [1, 2, '3', 4, 5, '6']

    // define demo map
    const map = new Map()
    map.set('a', 1)
    map.set('b', 2)
    map.set('c', 3)

    // define demo nodeList
    const nodeList = Dom.getAll(this.el, 'p')

    // define demo form data
    const formData = new FormData();
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');

    // iterate examples with all possibilities
    // iterate over object
    console.log('\n### iterate over object example')
    Utilities.iterate(object, (item: any, key: any) => {
      console.log('key: ', key)
      console.log('item: ', item)
    })

    // iterate over array
    console.log('\n### iterate over array example')
    Utilities.iterate(array, (item: any) => {
      console.log('item: ', item)
    })

    // iterate over map
    console.log('\n### iterate over map example')
    Utilities.iterate(map, (item: any, key: any) => {
      console.log('key: ', key)
      console.log('item: ', item)
    })

    // iterate over node list
    console.log('\n### iterate over node list example')
    Utilities.iterate(nodeList, (item: any) => {
      console.log('item: ', item)
    })

    // iterate over form data
    console.log('\n### iterate over form data example')
    Utilities.iterate(formData, (item: any, key: any) => {
      console.log('key: ', key)
      console.log('item: ', item)
    })
  }
  /* eslint-enable */
}
