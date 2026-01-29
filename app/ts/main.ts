// import npm packages
import 'material-symbols';
import bootstrap from '@ts/vendor/bootstrap/bootstrap';

// import scss files
import '@scss/main.scss';

// import plugin manager
import PluginManager from '@ts/plugin-system/plugin.manager';

const pluginManager = new PluginManager();

window.bootstrap = bootstrap;

// import ts plugins
import DemoPlugin from '@ts/plugins/demo.plugin';
import AppLoaderPlugin from '@ts/plugins/app-loader/app-loader.plugin';
import CodeBlockPlugin from '@ts/plugins/code-block/code-block.plugin';
import ReturnTopPlugin from '@ts/plugins/return-top/return-top.plugin';

// register ts plugins
pluginManager.registerPlugin(AppLoaderPlugin, 'AppLoader', '[data-app-loader]');
pluginManager.registerPlugin(CodeBlockPlugin, 'CodeBlock', '.code-block');
pluginManager.registerPlugin(ReturnTopPlugin, 'ReturnTop', '[data-return-top]');
pluginManager.registerPlugin(DemoPlugin, 'DemoPlugin', '#app');
