module.exports = (name, colors) => ({
  $schema: 'vscode://schemas/color-theme',
  name,
  type: 'dark',
  colors: {
    contrastBorder: colors.border_100,
    contrastActiveBorder: null,
    errorForeground: '#E1270E',
    focusBorder: colors.border_100,
    foreground: '#e6e6e6',
    'activityBar.background': colors.bg_100,
    'activityBar.border': colors.border_100,
    'activityBarBadge.background': '#242424',
    'button.background': '#0971f1',
    'button.foreground': colors.color_100,
    'button.border': '#0971f1',
    'dropdown.background': colors.bg_100,
    'dropdown.border': colors.border_100,
    'dropdown.foreground': colors.color_100,
    'editor.background': colors.bg_100,
    'editor.foreground': colors.color_100,
    'editor.hoverHighlightBackground': '#242424',
    'editor.inactiveSelectionBackground': '#242424',
    'editor.lineHighlightBackground': '#202020',
    'editor.lineHighlightBorder': '#313131',
    'editor.rangeHighlightBackground': '#222222',
    'editor.selectionBackground': '#3793E033',
    'editor.selectionHighlightBackground': '#222222',
    'editor.wordHighlightStrongBackground': '#222222',
    'editor.wordHighlightBackground': '#222222',
    'editorBracketMatch.background': '#222222',
    'editorBracketMatch.border': '#313131',
    'editorCodeLens.foreground': '#343434',
    'editorCursor.background': colors.bg_100,
    'editorCursor.foreground': '#3bc7b8',
    'editorError.border': colors.border_100,
    'editorError.foreground': '#E1270E',
    'editorGroup.background': colors.bg_100,
    'editorGroup.border': colors.border_100,
    'editorGroup.dropBackground': '#3793E01a',
    'editorGroupHeader.noTabsBackground': null,
    'editorGroupHeader.tabsBackground': colors.bg_100,
    'editorGroupHeader.tabsBorder': colors.border_100,
    'editorGutter.background': colors.bg_100,
    'editorGutter.deletedBackground': '#E1270E',
    'editorGutter.modifiedBackground': colors.bg_100,
    'editorHoverWidget.background': colors.bg_100,
    'editorHoverWidget.border': colors.border_100,
    'editorIndentGuide.background': colors.bg_100,
    'editorLink.activeForeground': colors.color_100,
    'editorLineNumber.foreground': '#364b49',
    'editorLineNumber.activeForeground': '#3bc7b8',
    'editorRuler.foreground': '#252525',
    'editorMarkerNavigation.background': colors.bg_100,
    'editorMarkerNavigationWarning.background': '#343434',
    'editorMarkerNavigationError.background': colors.bg_100,
    'editorOverviewRuler.border': colors.border_100,
    'editorOverviewRuler.commonContentForeground': '#343434',
    'editorOverviewRuler.currentContentForeground': '#E1270E',
    'editorOverviewRuler.incomingContentForeground': '#5BC266',
    'editorSuggestWidget.background': colors.bg_100,
    'editorSuggestWidget.border': colors.border_100,
    'editorSuggestWidget.foreground': '#999999',
    'editorSuggestWidget.selectedBackground': colors.border_100,
    'editorWarning.border': colors.border_100,
    'editorWarning.foreground': '#FBCC43',
    'editorWhitespace.foreground': '#252525',
    'editorWidget.background': colors.bg_100,
    'editorWidget.border': colors.border_100,
    'extensionButton.prominentBackground': '#343434',
    'extensionButton.prominentForeground': colors.color_100,
    'extensionButton.prominentHoverBackground': '#343434',
    'input.background': '#343434',
    'input.foreground': colors.color_100,
    'input.placeholderForeground': '#999999',
    'inputOption.activeBorder': '#242424',
    'inputValidation.infoForeground': null,
    'inputValidation.infoBackground': null,
    'inputValidation.infoBorder': '#BF5AF2',
    'inputValidation.warningForeground': null,
    'inputValidation.warningBackground': null,
    'inputValidation.warningBorder': '#FBCC43',
    'inputValidation.errorForeground': null,
    'inputValidation.errorBackground': null,
    'inputValidation.errorBorder': '#E1270E',
    'list.dropBackground': colors.bg_100,
    'list.highlightForeground': '#6CC7F6',
    'list.hoverBackground': '#343434',
    'list.focusBackground': '#343434',
    'list.activeSelectionBackground': '#343434',
    'list.activeSelectionForeground': colors.color_100,
    'list.inactiveSelectionBackground': '#343434',
    'list.inactiveSelectionForeground': colors.color_100,
    'list.warningForeground': '#FBCC43',
    'list.errorForeground': '#E1270E',
    'list.hoverForeground': null,
    'list.focusForeground': null,
    'menu.background': colors.bg_100,
    'menu.selectionBackground': '#343434',
    'peekView.border': '#242424',
    'peekViewEditor.background': '#343434',
    'peekViewEditor.matchHighlightBackground': '#6CC7F6',
    'peekViewEditorGutter.background': null,
    'peekViewResult.background': '#343434',
    'peekViewResult.fileForeground': colors.color_100,
    'peekViewResult.lineForeground': colors.color_100,
    'peekViewResult.matchHighlightBackground': '#6CC7F6',
    'peekViewResult.selectionBackground': '#343434',
    'peekViewResult.selectionForeground': colors.color_100,
    'peekViewTitle.background': '#343434',
    'peekViewTitleDescription.foreground': '#535BCF',
    'peekViewTitleLabel.foreground': colors.color_100,
    'scrollbarSlider.activeBackground': colors.color_100,
    'scrollbarSlider.border': colors.border_100,
    'scrollbarSlider.background': null,
    'scrollbarSlider.hoverBackground': null,
    'selection.background': '#3793E040',
    'separator.foreground': colors.color_100,
    'sideBar.background': colors.bg_100,
    'sideBar.hoverBackground': '#343434',
    'sideBar.border': '#343434',
    'sideBar.foreground': '#e6e6e6',
    'sideBarSectionHeader.background': colors.bg_100,
    'sideBarSectionHeader.foreground': colors.color_100,
    'sideBarSectionHeader.border': colors.border_100,
    'sideBarTitle.foreground': colors.color_100,
    'statusBar.background': colors.bg_100,
    'statusBar.foreground': '#bbb',
    'statusBar.debuggingBackground': '#E1270E',
    'statusBar.debuggingForeground': '#343434',
    'statusBar.noFolderBackground': '#343434',
    'statusBar.noFolderForeground': colors.color_100,
    'statusBar.border': colors.border_100,
    'statusBarItem.activeBackground': '#444444',
    'statusBarItem.hoverBackground': '#202020',
    'statusBarItem.prominentBackground': '#E1270E',
    'statusBarItem.prominentHoverBackground': '#FBCC43',
    'statusBarItem.remoteForeground': '#fff9f9',
    'statusBarItem.remoteBackground': '#BF5AF2',
    'tab.activeBackground': colors.bg_100,
    'tab.activeForeground': colors.color_100,
    'tab.border': colors.border_100,
    'tab.activeBorder': '#6CC7F6',
    'tab.unfocusedActiveBorder': null,
    'tab.inactiveBackground': colors.bg_100,
    'tab.inactiveForeground': '#757575',
    'tab.unfocusedActiveForeground': colors.color_100,
    'tab.unfocusedInactiveForeground': '#757575',
    'terminal.background': colors.bg_100,
    'terminal.foreground': colors.color_100,
    'terminal.ansiBrightBlack': '#535BCF',
    'terminal.ansiBrightRed': '#E1270E',
    'terminal.ansiBrightGreen': '#5BC266',
    'terminal.ansiBrightYellow': '#FBCC43',
    'terminal.ansiBlack': '#343434',
    'terminal.ansiRed': '#E1270E',
    'terminal.ansiGreen': '#5BC266',
    'terminal.ansiYellow': '#FBCC43',
    'terminal.ansiBlue': '#535BCF',
    'terminal.ansiMagenta': '#BF5AF2',
    'terminal.ansiCyan': '#6CC7F6',
    'terminal.ansiWhite': colors.color_100,
    'titleBar.background': colors.bg_100,
    'titleBar.activeBackground': colors.bg_100,
    'titleBar.activeForeground': colors.color_100,
    'titleBar.border': colors.border_100,
    'titleBar.inactiveBackground': colors.bg_100,
    'titleBar.inactiveForeground': '#999999',
  },
  tokenColors: [
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: '#6a837b',
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: '#CE1836',
      },
    },
    {
      name: 'Built-in constant',
      scope: 'constant.language',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'User-defined constant',
      scope: ['constant.character', 'constant.other'],
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Variable',
      scope: 'variable',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        foreground: '#EDB92E',
      },
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Storage type',
      scope: 'storage.type',
      settings: {
        fontStyle: '',
        foreground: '#FF4E50',
      },
    },
    {
      name: 'Class name',
      scope: 'entity.name.class',
      settings: {
        fontStyle: 'underline',
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: 'underline',
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Function name',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: '#c3cb4c',
      },
    },
    {
      name: 'Function argument',
      scope: 'variable.parameter',
      settings: {
        foreground: '',
      },
    },
    {
      name: 'Tag name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: '#FF4E50',
      },
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Library function',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: '#F85931',
      },
    },
    {
      name: 'Library constant',
      scope: 'support.constant',
      settings: {
        fontStyle: '',
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Library class/type',
      scope: ['support.type', 'support.class'],
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Library variable',
      scope: 'support.other.variable',
      settings: {
        fontStyle: '',
      },
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        background: '#00a8c6',
        fontStyle: '',
        foreground: '#e3e2e0',
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        background: '#00a8c6',
        foreground: '#e3e2e0',
      },
    },
    {
      name: 'JSON String',
      scope: 'meta.structure.dictionary.json string.quoted.double.json',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'JSON Property Names',
      scope: [
        'support.type.property-name.json',
        'meta.object-literal.key.js string.quoted.single.js',
      ],
      settings: {
        foreground: colors.red_100,
      },
    },
    {
      name: 'diff.header',
      scope: ['meta.diff', 'meta.diff.header'],
      settings: {
        foreground: '#75715E',
      },
    },
    {
      name: 'diff.deleted',
      scope: 'markup.deleted',
      settings: {
        foreground: '#00A8C6',
      },
    },
    {
      name: 'diff.inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: '#A6E22E',
      },
    },
    {
      name: 'diff.changed',
      scope: 'markup.changed',
      settings: {
        foreground: '#E6DB74',
      },
    },
    {
      scope: 'constant.numeric.line-number.find-in-files - match',
      settings: {
        foreground: '#8FBE00A0',
      },
    },
    {
      scope: 'entity.name.filename.find-in-files',
      settings: {
        foreground: '#E6DB74',
      },
    },
    {
      scope: 'keyword.other',
      settings: {
        foreground: '#9b9b9b',
      },
    },
    {
      scope: [
        'meta.property-value',
        'support.constant.property-value',
        'constant.other.color',
      ],
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      scope: 'meta.structure.dictionary.json string.quoted.double.json',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      scope: 'meta.structure.dictionary.value.json string.quoted.double.json',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Function argument',
      scope: 'meta.property-name support.type.property-name',
      settings: {
        fontStyle: 'normal',
      },
    },
    {
      name: 'Function argument',
      scope: 'meta.property-value punctuation.separator.key-value',
      settings: {
        foreground: '#e3e2e0',
      },
    },
    {
      name: 'Function argument',
      scope: [
        'keyword.other.use',
        'keyword.other.function.use',
        'keyword.other.namespace',
        'keyword.other.new',
        'keyword.other.special-method',
        'keyword.other.unit',
        'keyword.other.use-as',
      ],
      settings: {
        foreground: '#FF4E50',
      },
    },
    {
      name: 'Function argument',
      scope: [
        'meta.use support.class.builtin',
        'meta.other.inherited-class support.class.builtin',
      ],
      settings: {
        foreground: '#e3e2e0',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Function argument',
      scope: 'variable.other',
      settings: {
        foreground: '',
        fontStyle: 'normal',
      },
    },
    {
      name: 'Coffeescript Function argument',
      scope: 'variable.parameter.function.coffee',
      settings: {
        foreground: '#CE1836',
      },
    },
    {
      name: 'Markdown Titles',
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Markdown Title Hash',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: '#EDB92E',
      },
    },
    {
      name: 'Markdown Raw',
      scope: 'markup.raw.inline.markdown',
      settings: {
        foreground: '#3bc7b8',
      },
    },
    {
      name: 'Markdown bold stars',
      scope: [
        'punctuation.definition.bold.markdown',
        'punctuation.definition.italic.markdown',
      ],
      settings: {
        foreground: '#EDB92E',
      },
    },
    {
      name: 'Markdown link title braces',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
      ],
      settings: {
        foreground: '#EDB92E',
      },
    },
    {
      name: 'Markdown link braces',
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: '#EDB92E',
      },
    },
    {
      name: 'Markdown link',
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
        'meta.image.inline.markdown',
      ],
      settings: {
        foreground: '#FF4E50',
      },
    },
    {
      name: 'Markdown bold/italic',
      scope: ['markup.bold.markdown', 'markup.italic.markdown'],
      settings: {
        foreground: '#FF4E50',
      },
    },
    {
      name: 'Markdown bold/italic',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown bold/italic',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown pre',
      scope: 'markup.raw.block.markdown',
      settings: {
        foreground: '#00a8c6',
      },
    },
    {
      name: 'GitGutter deleted',
      scope: 'markup.deleted.git_gutter',
      settings: {
        foreground: '#e61f44',
      },
    },
    {
      name: 'GitGutter inserted',
      scope: 'markup.inserted.git_gutter',
      settings: {
        foreground: '#a7da1e',
      },
    },
    {
      name: 'GitGutter changed',
      scope: 'markup.changed.git_gutter',
      settings: {
        foreground: '#f7b83d',
      },
    },
    {
      name: 'CSS Class',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: '#c3cb4c',
      },
    },
  ],
})
