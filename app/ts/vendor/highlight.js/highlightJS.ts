// import highlight.js core and theme
import syntaxHighlighter from 'highlight.js/lib/core'
// import 'highlight.js/styles/github-dark.min.css'
import 'highlight.js/styles/tokyo-night-dark.min.css'

// import highlight.js languages and register them
import apache from 'highlight.js/lib/languages/apache'
syntaxHighlighter.registerLanguage('apache', apache)

import bash from 'highlight.js/lib/languages/bash'
syntaxHighlighter.registerLanguage('bash', bash)

import c from 'highlight.js/lib/languages/c'
syntaxHighlighter.registerLanguage('c', c)

import cpp from 'highlight.js/lib/languages/cpp'
syntaxHighlighter.registerLanguage('cpp', cpp)

import csharp from 'highlight.js/lib/languages/csharp'
syntaxHighlighter.registerLanguage('csharp', csharp)

import css from 'highlight.js/lib/languages/css'
syntaxHighlighter.registerLanguage('css', css)

import dart from 'highlight.js/lib/languages/dart'
syntaxHighlighter.registerLanguage('dart', dart)

import dockerfile from 'highlight.js/lib/languages/dockerfile'
syntaxHighlighter.registerLanguage('dockerfile', dockerfile)

import go from 'highlight.js/lib/languages/go'
syntaxHighlighter.registerLanguage('go', go)

import graphql from 'highlight.js/lib/languages/graphql'
syntaxHighlighter.registerLanguage('graphql', graphql)

import java from 'highlight.js/lib/languages/java'
syntaxHighlighter.registerLanguage('java', java)

import javascript from 'highlight.js/lib/languages/javascript'
syntaxHighlighter.registerLanguage('javascript', javascript)

import json from 'highlight.js/lib/languages/json'
syntaxHighlighter.registerLanguage('json', json)

import kotlin from 'highlight.js/lib/languages/kotlin'
syntaxHighlighter.registerLanguage('kotlin', kotlin)

import less from 'highlight.js/lib/languages/less'
syntaxHighlighter.registerLanguage('less', less)

import markdown from 'highlight.js/lib/languages/markdown'
syntaxHighlighter.registerLanguage('markdown', markdown)

import nginx from 'highlight.js/lib/languages/nginx'
syntaxHighlighter.registerLanguage('nginx', nginx)

import objectivec from 'highlight.js/lib/languages/objectivec'
syntaxHighlighter.registerLanguage('objectivec', objectivec)

import php from 'highlight.js/lib/languages/php'
syntaxHighlighter.registerLanguage('php', php)

import phpTemplate from 'highlight.js/lib/languages/php-template'
syntaxHighlighter.registerLanguage('php-template', phpTemplate)

import plaintext from 'highlight.js/lib/languages/plaintext'
syntaxHighlighter.registerLanguage('plaintext', plaintext)

import powershell from 'highlight.js/lib/languages/powershell'
syntaxHighlighter.registerLanguage('powershell', powershell)

import python from 'highlight.js/lib/languages/python'
syntaxHighlighter.registerLanguage('python', python)

import ruby from 'highlight.js/lib/languages/ruby'
syntaxHighlighter.registerLanguage('ruby', ruby)

import rust from 'highlight.js/lib/languages/rust'
syntaxHighlighter.registerLanguage('rust', rust)

import scss from 'highlight.js/lib/languages/scss'
syntaxHighlighter.registerLanguage('scss', scss)

import shell from 'highlight.js/lib/languages/shell'
syntaxHighlighter.registerLanguage('shell', shell)

import sql from 'highlight.js/lib/languages/sql'
syntaxHighlighter.registerLanguage('sql', sql)

import swift from 'highlight.js/lib/languages/swift'
syntaxHighlighter.registerLanguage('swift', swift)

import twig from 'highlight.js/lib/languages/twig'
syntaxHighlighter.registerLanguage('twig', twig)

import typescript from 'highlight.js/lib/languages/typescript'
syntaxHighlighter.registerLanguage('typescript', typescript)

import yaml from 'highlight.js/lib/languages/yaml'
syntaxHighlighter.registerLanguage('yaml', yaml)

// export hightlight.js with registered languages
export default syntaxHighlighter
