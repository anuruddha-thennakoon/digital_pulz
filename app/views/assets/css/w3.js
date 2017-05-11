import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // W3.CSS 3.04 Apr 2017 by Jan Egil and Borge Refsnes
  'html': {
    'boxSizing': 'border-box'
  },
  '*': {
    'boxSizing': 'inherit'
  },
  '*:before': {
    'boxSizing': 'inherit'
  },
  '*:after': {
    'boxSizing': 'inherit'
  },
  // Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize
  'html': {
    'MsTextSizeAdjust': '100%',
    'WebkitTextSizeAdjust': '100%'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'details': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'summary': {
    'display': 'block'
  },
  'audio': {
    'display': 'inline-block'
  },
  'canvas': {
    'display': 'inline-block'
  },
  'progress': {
    'display': 'inline-block'
  },
  'video': {
    'display': 'inline-block'
  },
  'progress': {
    'verticalAlign': 'baseline'
  },
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  '[hidden]': {
    'display': 'none'
  },
  'template': {
    'display': 'none'
  },
  'a': {
    'backgroundColor': 'transparent',
    'WebkitTextDecorationSkip': 'objects'
  },
  'a:active': {
    'outlineWidth': '0'
  },
  'a:hover': {
    'outlineWidth': '0'
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'textDecoration': 'underline',
    'textDecoration': 'underline dotted'
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'mark': {
    'background': '#ff0',
    'color': '#000'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'figure': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }]
  },
  'img': {
    'borderStyle': 'none'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'code': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'button': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'select': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'optgroup': {
    'fontWeight': 'bold'
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  'button': {
    'WebkitAppearance': 'button'
  },
  'html [type=button]': {
    'WebkitAppearance': 'button'
  },
  '[type=reset]': {
    'WebkitAppearance': 'button'
  },
  '[type=submit]': {
    'WebkitAppearance': 'button'
  },
  'button::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=button]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=reset]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=submit]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type=button]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type=reset]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type=submit]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c0c0c0' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'legend': {
    'color': 'inherit',
    'display': 'table',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'normal'
  },
  'textarea': {
    'overflow': 'auto'
  },
  '[type=checkbox]': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=radio]': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type=number]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=number]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type=search]': {
    'WebkitAppearance': 'textfield',
    'outlineOffset': '-2px'
  },
  '[type=search]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  '[type=search]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  '::-webkit-input-placeholder': {
    'color': 'inherit',
    'opacity': '0.54'
  },
  '::-webkit-file-upload-button': {
    'WebkitAppearance': 'button',
    'font': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  // End extract
  'html': {
    'fontFamily': 'Verdana,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'body': {
    'fontFamily': 'Verdana,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'html': {
    'overflowX': 'hidden'
  },
  'h1': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h2': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h3': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h4': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h5': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h6': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'w3-slim': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'w3-wide': {
    'fontFamily': '"Segoe UI",Arial,sans-serif'
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-serif': {
    'fontFamily': '"Times New Roman",Times,serif'
  },
  'h1': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'fontWeight': '400',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-wide': {
    'letterSpacing': [{ 'unit': 'px', 'value': 4 }]
  },
  'h1 a': {
    'fontWeight': 'inherit'
  },
  'h2 a': {
    'fontWeight': 'inherit'
  },
  'h3 a': {
    'fontWeight': 'inherit'
  },
  'h4 a': {
    'fontWeight': 'inherit'
  },
  'h5 a': {
    'fontWeight': 'inherit'
  },
  'h6 a': {
    'fontWeight': 'inherit'
  },
  'hr': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'img': {
    'marginBottom': [{ 'unit': 'px', 'value': -5 }]
  },
  'a': {
    'color': 'inherit'
  },
  'w3-image': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'w3-table': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'table'
  },
  'w3-table-all': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'table'
  },
  'w3-table-all': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  'w3-bordered tr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'w3-table-all tr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'w3-striped tbody tr:nth-child(even)': {
    'backgroundColor': '#f1f1f1'
  },
  'w3-table-all tr:nth-child(odd)': {
    'backgroundColor': '#fff'
  },
  'w3-table-all tr:nth-child(even)': {
    'backgroundColor': '#f1f1f1'
  },
  'w3-hoverable tbody tr:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-ulw3-hoverable li:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-centered tr th': {
    'textAlign': 'center'
  },
  'w3-centered tr td': {
    'textAlign': 'center'
  },
  'w3-table td': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'display': 'table-cell',
    'textAlign': 'left',
    'verticalAlign': 'top'
  },
  'w3-table th': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'display': 'table-cell',
    'textAlign': 'left',
    'verticalAlign': 'top'
  },
  'w3-table-all td': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'display': 'table-cell',
    'textAlign': 'left',
    'verticalAlign': 'top'
  },
  'w3-table-all th': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'display': 'table-cell',
    'textAlign': 'left',
    'verticalAlign': 'top'
  },
  'w3-table th:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-table td:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-table-all th:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-table-all td:first-child': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-btn': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'inline-block',
    'outline': '0',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }],
    'verticalAlign': 'middle',
    'overflow': 'hidden',
    'textDecoration': 'none!important',
    'color': '#fff',
    'backgroundColor': '#000',
    'textAlign': 'center',
    'cursor': 'pointer',
    'whiteSpace': 'nowrap'
  },
  'w3-btn-block': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'inline-block',
    'outline': '0',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }],
    'verticalAlign': 'middle',
    'overflow': 'hidden',
    'textDecoration': 'none!important',
    'color': '#fff',
    'backgroundColor': '#000',
    'textAlign': 'center',
    'cursor': 'pointer',
    'whiteSpace': 'nowrap'
  },
  'w3-button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'inline-block',
    'outline': '0',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }],
    'verticalAlign': 'middle',
    'overflow': 'hidden',
    'textDecoration': 'none!important',
    'color': '#fff',
    'backgroundColor': '#000',
    'textAlign': 'center',
    'cursor': 'pointer',
    'whiteSpace': 'nowrap'
  },
  'w3-btn:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }]
  },
  'w3-btn-block:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }]
  },
  'w3-btn-floating:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }]
  },
  'w3-btn-floating-large:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }]
  },
  'w3-button': {
    'color': '#000',
    'backgroundColor': '#f1f1f1',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-button:hover': {
    'color': '#000!important',
    'backgroundColor': '#ccc!important'
  },
  'w3-btn': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-btn-floating': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-btn-floating-large': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-closenav': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-opennav': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-btn-block': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-button': {
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'w3-btn-floating': {
    'display': 'inline-block',
    'textAlign': 'center',
    'color': '#fff',
    'backgroundColor': '#000',
    'position': 'relative',
    'overflow': 'hidden',
    'zIndex': '1',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '50%',
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-btn-floating-large': {
    'display': 'inline-block',
    'textAlign': 'center',
    'color': '#fff',
    'backgroundColor': '#000',
    'position': 'relative',
    'overflow': 'hidden',
    'zIndex': '1',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '50%',
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-btn-floating': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'w3-btn-floating-large': {
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }]
  },
  'w3-disabled': {
    'cursor': 'not-allowed',
    'opacity': '0.3'
  },
  'w3-btn:disabled': {
    'cursor': 'not-allowed',
    'opacity': '0.3'
  },
  'w3-button:disabled': {
    'cursor': 'not-allowed',
    'opacity': '0.3'
  },
  'w3-btn-floating:disabled': {
    'cursor': 'not-allowed',
    'opacity': '0.3'
  },
  'w3-btn-floating-large:disabled': {
    'cursor': 'not-allowed',
    'opacity': '0.3'
  },
  'w3-disabled *': {
    'pointerEvents': 'none'
  },
  ':disabled *': {
    'pointerEvents': 'none'
  },
  'w3-btnw3-disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-blockw3-disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn:disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-floatingw3-disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-floating:disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-floating-largew3-disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-floating-large:disabled:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'w3-btn-group w3-btn': {
    'float': 'left'
  },
  'w3-btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-btn-bar w3-btn': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'float': 'left'
  },
  'w3-btn-bar w3-btn:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-badge': {
    'backgroundColor': '#000',
    'color': '#fff',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'paddingRight': [{ 'unit': 'px', 'value': 8 }],
    'textAlign': 'center'
  },
  'w3-tag': {
    'backgroundColor': '#000',
    'color': '#fff',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'paddingRight': [{ 'unit': 'px', 'value': 8 }],
    'textAlign': 'center'
  },
  'w3-sign': {
    'backgroundColor': '#000',
    'color': '#fff',
    'display': 'inline-block',
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'paddingRight': [{ 'unit': 'px', 'value': 8 }],
    'textAlign': 'center'
  },
  'w3-badge': {
    'borderRadius': '50%'
  },
  'ulw3-ul': {
    'listStyleType': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulw3-ul li': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'ulw3-ul li:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'w3-tooltip': {
    'position': 'relative'
  },
  'w3-display-container': {
    'position': 'relative'
  },
  'w3-tooltip w3-text': {
    'display': 'none'
  },
  'w3-tooltip:hover w3-text': {
    'display': 'inline-block'
  },
  'w3-navbar': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'w3-navbar li': {
    'float': 'left'
  },
  'w3-navbar li a': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-navitem': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-navbar li w3-btn': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-navbar li w3-input': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-navbar li w3-btn': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-navbar li w3-input': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-navbar li a:hover': {
    'color': '#000',
    'backgroundColor': '#ccc'
  },
  'w3-navbar w3-dropdown-hover': {
    'position': 'static'
  },
  'w3-navbar w3-dropdown-click': {
    'position': 'static'
  },
  'w3-navbar w3-dropdown-hover:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navbar w3-dropdown-hover:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navbar w3-dropdown-click:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navbar a': {
    'textDecoration': 'none!important'
  },
  'w3-topnav a': {
    'textDecoration': 'none!important'
  },
  'w3-sidenav a': {
    'textDecoration': 'none!important'
  },
  'w3-dropdown-content a': {
    'textDecoration': 'none!important'
  },
  'w3-accordion-content a': {
    'textDecoration': 'none!important'
  },
  'w3-dropnav a': {
    'textDecoration': 'none!important'
  },
  'w3-navblock a': {
    'textDecoration': 'none!important'
  },
  'w3-navbar w3-opennavw3-right': {
    'float': 'right!important'
  },
  'w3-topnav': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-navblock w3-dropdown-hover:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navblock w3-dropdown-hover:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navblock w3-dropdown-click:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navblock w3-dropdown-hover': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-navblock w3-dropdown-click': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-navblock w3-dropdown-hover w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-navblock w3-dropdown-click w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-topnav a': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }],
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'WebkitTransition': 'border-bottom .25s',
    'transition': 'border-bottom .25s'
  },
  'w3-topnav a:hover': {
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'w3-topnav w3-dropdown-hover a': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-opennav': {
    'color': 'inherit'
  },
  'w3-closenav': {
    'color': 'inherit'
  },
  'w3-opennav:hover': {
    'cursor': 'pointer',
    'opacity': '0.8'
  },
  'w3-closenav:hover': {
    'cursor': 'pointer',
    'opacity': '0.8'
  },
  'w3-btn': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-btn-floating': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-dropnav a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-btn-floating-large': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-btn-block': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-navbar a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-navblock a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-sidenav a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-pagination li a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-hoverable tbody tr': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-hoverable li': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-accordion-content a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-dropdown-content a': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-dropdown-click:hover': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-dropdown-hover:hover': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-opennav': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-closenav': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-closebtn': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  '*[class*="w3-hover-"]': {
    'WebkitTransition': 'background-color .25s,color .15s,box-shadow .25s,opacity 0.25s,filter 0.25s,border 0.15s',
    'transition': 'background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s'
  },
  'w3-ripple:active': {
    'opacity': '0.5'
  },
  'w3-ripple': {
    'WebkitTransition': 'opacity 0s',
    'transition': 'opacity 0s'
  },
  'w3-sidenav': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'backgroundColor': '#fff',
    'position': 'fixed!important',
    'zIndex': '1',
    'overflow': 'auto'
  },
  'w3-sidebar': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'backgroundColor': '#fff',
    'position': 'fixed!important',
    'zIndex': '1',
    'overflow': 'auto'
  },
  'w3-sidenav a': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-navblock a': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-sidenav a:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-navblock a:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-sidenav a': {
    'display': 'block'
  },
  'w3-dropnav a': {
    'display': 'block'
  },
  'w3-navblock a': {
    'display': 'block'
  },
  'w3-sidenav w3-dropdown-hover:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-sidenav w3-dropdown-hover:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-sidenav w3-dropdown-click:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-dropnav a:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-sidenav w3-dropdown-hover': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-sidenav w3-dropdown-click': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-bar-block w3-dropdown-hover': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-bar-block w3-dropdown-click': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-sidenav w3-dropdown-hover w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-sidenav w3-dropdown-click w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-bar-block w3-dropdown-hover w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-bar-block w3-dropdown-click w3-dropdown-content': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-bar-block w3-dropdown-hover w3-button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'left',
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-bar-block w3-dropdown-click w3-button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'left',
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-main': {
    'transition': 'margin-left .4s',
    '<w992': {
      'marginLeft': [{ 'unit': 'px', 'value': 0 }],
      'marginRight': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  '#main': {
    'transition': 'margin-left .4s',
    '<w992': {
      'marginLeft': [{ 'unit': 'px', 'value': 0 }],
      'marginRight': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'w3-modal': {
    'zIndex': '3',
    'display': 'none',
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflow': 'auto',
    'backgroundColor': 'rgb(0,0,0)',
    'backgroundColor': 'rgba(0,0,0,0.4)'
  },
  'w3-modal-content': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#fff',
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'outline': '0',
    'width': [{ 'unit': 'px', 'value': 600 }],
    '<w600': {
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
      'width': [{ 'unit': 'string', 'value': 'auto!important' }]
    },
    '<w768': {
      'width': [{ 'unit': 'px', 'value': 500 }]
    },
    '>w993': {
      'width': [{ 'unit': 'px', 'value': 900 }]
    }
  },
  'w3-closebtn': {
    'textDecoration': 'none',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'bold',
    'color': 'inherit'
  },
  'w3-closebtn:hover': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'w3-closebtn:focus': {
    'color': '#000',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'w3-pagination': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-pagination li': {
    'display': 'inline'
  },
  'w3-pagination li a': {
    'textDecoration': 'none',
    'color': '#000',
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-pagination li a:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-input-group': {
    'marginTop': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-group': {
    'marginTop': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-input': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'display': 'block',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#808080' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-label': {
    'color': '#009688'
  },
  'w3-input:not(:valid)~w3-validate': {
    'color': '#f44336'
  },
  'w3-select': {
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#000',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#009688' }]
  },
  'w3-select select:focus': {
    'color': '#000',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#009688' }]
  },
  'w3-select option[disabled]': {
    'color': '#009688'
  },
  'w3-dropdown-click': {
    'position': 'relative',
    'display': 'inline-block',
    'cursor': 'pointer'
  },
  'w3-dropdown-hover': {
    'position': 'relative',
    'display': 'inline-block',
    'cursor': 'pointer'
  },
  'w3-dropdown-hover:hover w3-dropdown-content': {
    'display': 'block',
    'zIndex': '1'
  },
  'w3-dropdown-hover:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-dropdown-click:hover': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-dropdown-hover:hover > w3-button:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-dropdown-click:hover > w3-button:first-child': {
    'backgroundColor': '#ccc',
    'color': '#000'
  },
  'w3-dropdown-content': {
    'cursor': 'auto',
    'color': '#000',
    'backgroundColor': '#fff',
    'display': 'none',
    'position': 'absolute',
    'minWidth': [{ 'unit': 'px', 'value': 160 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-dropdown-content a': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }],
    'display': 'block'
  },
  'w3-dropdown-content a:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-accordion': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'cursor': 'pointer'
  },
  'w3-accordion-content': {
    'cursor': 'auto',
    'display': 'none',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-accordion-content a': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 16 }],
    'display': 'block'
  },
  'w3-accordion-content a:hover': {
    'backgroundColor': '#ccc'
  },
  'w3-progress-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 1.5 }],
    'position': 'relative',
    'backgroundColor': '#f1f1f1'
  },
  'w3-progressbar': {
    'backgroundColor': '#757575',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute',
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'input[type=checkbox]w3-check': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 6 }]
  },
  'input[type=radio]w3-radio': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 6 }]
  },
  'input[type=checkbox]w3-check:checked+w3-validate': {
    'color': '#009688'
  },
  'input[type=radio]w3-radio:checked+w3-validate': {
    'color': '#009688'
  },
  'input[type=checkbox]w3-check:disabled+w3-validate': {
    'color': '#aaa'
  },
  'input[type=radio]w3-radio:disabled+w3-validate': {
    'color': '#aaa'
  },
  'w3-bar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'w3-center w3-bar': {
    'display': 'inline-block',
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'w3-bar w3-bar-item': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }],
    'float': 'left',
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'display': 'block'
  },
  'w3-bar w3-dropdown-hover': {
    'position': 'static',
    'float': 'left'
  },
  'w3-bar w3-dropdown-click': {
    'position': 'static',
    'float': 'left'
  },
  'w3-bar w3-button': {
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'whiteSpace': 'normal'
  },
  'w3-bar-block w3-bar-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }],
    'textAlign': 'left',
    'backgroundColor': 'inherit',
    'color': 'inherit',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'whiteSpace': 'normal',
    'float': 'none'
  },
  'w3-bar-blockw3-center w3-bar-item': {
    'textAlign': 'center'
  },
  'w3-block': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-responsive': {
    'overflowX': 'auto'
  },
  'w3-container:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-container:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-panel:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-panel:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-row:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-row:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-row-padding:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-row-padding:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-cell-row:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-cell-row:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-topnav:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-topnav:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-clear:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-clear:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-btn-group:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-btn-group:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-btn-bar:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-btn-bar:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-bar:before': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-bar:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'w3-col': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-half': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-third': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-twothird': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-threequarter': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-quarter': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w601': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    },
    '>w993': {
      'width': [{ 'unit': '%H', 'value': 0.2499999 }]
    }
  },
  'w3-cols1': {
    'width': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'w3-cols2': {
    'width': [{ 'unit': '%H', 'value': 0.1666666 }]
  },
  'w3-cols3': {
    'width': [{ 'unit': '%H', 'value': 0.2499999 }]
  },
  'w3-cols4': {
    'width': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'w3-cols5': {
    'width': [{ 'unit': '%H', 'value': 0.4166666 }]
  },
  'w3-cols6': {
    'width': [{ 'unit': '%H', 'value': 0.49999989999999994 }]
  },
  'w3-cols7': {
    'width': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'w3-cols8': {
    'width': [{ 'unit': '%H', 'value': 0.6666665999999999 }]
  },
  'w3-cols9': {
    'width': [{ 'unit': '%H', 'value': 0.7499998999999999 }]
  },
  'w3-cols10': {
    'width': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'w3-cols11': {
    'width': [{ 'unit': '%H', 'value': 0.9166665999999999 }]
  },
  'w3-cols12': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-half': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-third': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-twothird': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-threequarter': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-quarter': {
    'width': [{ 'unit': '%H', 'value': 0.9999998999999999 }]
  },
  'w3-content': {
    'maxWidth': [{ 'unit': 'px', 'value': 980 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'w3-rest': {
    'overflow': 'hidden'
  },
  'w3-layout-container': {
    'display': 'table',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-cell-row': {
    'display': 'table',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-layout-row': {
    'display': 'table-row'
  },
  'w3-layout-cell': {
    'display': 'table-cell'
  },
  'w3-layout-col': {
    'display': 'table-cell'
  },
  'w3-cell': {
    'display': 'table-cell'
  },
  'w3-layout-top': {
    'verticalAlign': 'top'
  },
  'w3-cell-top': {
    'verticalAlign': 'top'
  },
  'w3-layout-middle': {
    'verticalAlign': 'middle'
  },
  'w3-cell-middle': {
    'verticalAlign': 'middle'
  },
  'w3-layout-bottom': {
    'verticalAlign': 'bottom'
  },
  'w3-cell-bottom': {
    'verticalAlign': 'bottom'
  },
  'w3-hide': {
    'display': 'none!important'
  },
  'w3-show-block': {
    'display': 'block!important'
  },
  'w3-show': {
    'display': 'block!important'
  },
  'w3-show-inline-block': {
    'display': 'inline-block!important'
  },
  'w3-top': {
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '1'
  },
  'w3-bottom': {
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '1'
  },
  'w3-top': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-bottom': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-overlay': {
    'position': 'fixed',
    'display': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': 'rgba(0,0,0,0.5)',
    'zIndex': '2'
  },
  'w3-left': {
    'float': 'left!important'
  },
  'w3-right': {
    'float': 'right!important'
  },
  'w3-tiny': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'w3-small': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'w3-medium': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'w3-large': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'w3-xlarge': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-xxlarge': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'w3-xxxlarge': {
    'fontSize': [{ 'unit': 'px', 'value': 48 }]
  },
  'w3-jumbo': {
    'fontSize': [{ 'unit': 'px', 'value': 64 }]
  },
  'w3-vertical': {
    'wordBreak': 'break-all',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'em', 'value': 0.6 }]
  },
  'w3-left-align': {
    'textAlign': 'left!important'
  },
  'w3-right-align': {
    'textAlign': 'right!important'
  },
  'w3-justify': {
    'textAlign': 'justify!important'
  },
  'w3-center': {
    'textAlign': 'center!important'
  },
  'w3-display-topleft': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-display-topright': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-display-bottomleft': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-display-bottomright': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-display-middle': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%,-50%)',
    'MsTransform': 'translate(-50%,-50%)'
  },
  'w3-display-left': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0 }],
    'transform': 'translate(0%,-50%)',
    'MsTransform': 'translate(-0%,-50%)'
  },
  'w3-display-right': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': '%H', 'value': 0 }],
    'transform': 'translate(0%,-50%)',
    'MsTransform': 'translate(0%,-50%)'
  },
  'w3-display-topmiddle': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translate(-50%,0%)',
    'MsTransform': 'translate(-50%,0%)'
  },
  'w3-display-bottommiddle': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'translate(-50%,0%)',
    'MsTransform': 'translate(-50%,0%)'
  },
  'w3-display-container:hover w3-display-hover': {
    'display': 'block'
  },
  'w3-display-container:hover spanw3-display-hover': {
    'display': 'inline-block'
  },
  'w3-display-hover': {
    'display': 'none'
  },
  'w3-display-position': {
    'position': 'absolute'
  },
  'w3-circle': {
    'borderRadius': '50%!important'
  },
  'w3-round-small': {
    'borderRadius': '2px!important'
  },
  'w3-round': {
    'borderRadius': '4px!important'
  },
  'w3-round-medium': {
    'borderRadius': '4px!important'
  },
  'w3-round-large': {
    'borderRadius': '8px!important'
  },
  'w3-round-xlarge': {
    'borderRadius': '16px!important'
  },
  'w3-round-xxlarge': {
    'borderRadius': '32px!important'
  },
  'w3-round-jumbo': {
    'borderRadius': '64px!important'
  },
  'w3-border-0': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'w3-border': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-border-top': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-border-bottom': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-border-left': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-border-right': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-margin': {
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-margin-0': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-margin-top': {
    'marginTop': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-margin-bottom': {
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-margin-left': {
    'marginLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-margin-right': {
    'marginRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-section': {
    'marginTop': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-padding-tiny': {
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }]
  },
  'w3-padding-small': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-padding-medium': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-padding': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-form': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-padding-large': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 24 }]
  },
  'w3-padding-xlarge': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 32 }]
  },
  'w3-padding-xxlarge': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 48 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 48 }]
  },
  'w3-padding-jumbo': {
    'padding': [{ 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 64 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 64 }]
  },
  'w3-padding-4': {
    'paddingTop': [{ 'unit': 'px', 'value': 4 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 4 }]
  },
  'w3-padding-8': {
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'w3-padding-12': {
    'paddingTop': [{ 'unit': 'px', 'value': 12 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  'w3-padding-16': {
    'paddingTop': [{ 'unit': 'px', 'value': 16 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-padding-24': {
    'paddingTop': [{ 'unit': 'px', 'value': 24 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 24 }]
  },
  'w3-padding-32': {
    'paddingTop': [{ 'unit': 'px', 'value': 32 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 32 }]
  },
  'w3-padding-48': {
    'paddingTop': [{ 'unit': 'px', 'value': 48 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 48 }]
  },
  'w3-padding-64': {
    'paddingTop': [{ 'unit': 'px', 'value': 64 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 64 }]
  },
  'w3-padding-128': {
    'paddingTop': [{ 'unit': 'px', 'value': 128 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 128 }]
  },
  'w3-padding-0': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-padding-top': {
    'paddingTop': [{ 'unit': 'px', 'value': 8 }]
  },
  'w3-padding-bottom': {
    'paddingBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'w3-padding-left': {
    'paddingLeft': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-padding-right': {
    'paddingRight': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-topbar': {
    'borderTop': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-bottombar': {
    'borderBottom': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-leftbar': {
    'borderLeft': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-rightbar': {
    'borderRight': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }]
  },
  'w3-row-padding': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-half': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-third': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-twothird': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-threequarter': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-quarter': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-row-padding>w3-col': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }]
  },
  'w3-spin': {
    'animation': 'w3-spin 2s infinite linear',
    'WebkitAnimation': 'w3-spin 2s infinite linear'
  },
  'w3-container': {
    'padding': [{ 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-panel': {
    'padding': [{ 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-example': {
    'backgroundColor': '#f1f1f1',
    'padding': [{ 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'em', 'value': 0.01 }, { 'unit': 'px', 'value': 16 }]
  },
  'w3-code': {
    'fontFamily': 'Consolas,"courier new"',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-codespan': {
    'fontFamily': 'Consolas,"courier new"',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'w3-code': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'backgroundColor': '#fff',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'borderLeft': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4CAF50' }],
    'wordWrap': 'break-word'
  },
  'w3-codespan': {
    'color': 'crimson',
    'backgroundColor': '#f1f1f1',
    'paddingLeft': [{ 'unit': 'px', 'value': 4 }],
    'paddingRight': [{ 'unit': 'px', 'value': 4 }],
    'fontSize': [{ 'unit': '%V', 'value': 1.1 }]
  },
  'w3-example': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-code': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'w3-card': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16),0' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)!important' }]
  },
  'w3-card-2': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16),0' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)!important' }]
  },
  'w3-example': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.16),0' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.12)!important' }]
  },
  'w3-card-4': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)!important' }]
  },
  'w3-hover-shadow:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)!important' }]
  },
  'w3-card-8': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)!important' }]
  },
  'w3-card-12': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.24)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.24),0' }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.19)!important' }]
  },
  'w3-card-16': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22),0' }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 55 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.21)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.21)!important' }]
  },
  'w3-card-24': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2),0' }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 77 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.22)!important' }]
  },
  'w3-animate-fading': {
    'WebkitAnimation': 'fading 10s infinite',
    'animation': 'fading 10s infinite'
  },
  'w3-animate-opacity': {
    'WebkitAnimation': 'opac 0.8s',
    'animation': 'opac 0.8s'
  },
  'w3-animate-top': {
    'position': 'relative',
    'WebkitAnimation': 'animatetop 0.4s',
    'animation': 'animatetop 0.4s'
  },
  'w3-animate-left': {
    'position': 'relative',
    'WebkitAnimation': 'animateleft 0.4s',
    'animation': 'animateleft 0.4s'
  },
  'w3-animate-right': {
    'position': 'relative',
    'WebkitAnimation': 'animateright 0.4s',
    'animation': 'animateright 0.4s'
  },
  'w3-animate-bottom': {
    'position': 'relative',
    'WebkitAnimation': 'animatebottom 0.4s',
    'animation': 'animatebottom 0.4s'
  },
  'w3-animate-zoom': {
    'WebkitAnimation': 'animatezoom 0.6s',
    'animation': 'animatezoom 0.6s'
  },
  'w3-animate-input': {
    'WebkitTransition': 'width 0.4s ease-in-out',
    'transition': 'width 0.4s ease-in-out'
  },
  'w3-animate-input:focus': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'w3-opacity': {
    'opacity': '0.60',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-hover-opacity:hover': {
    'opacity': '0.60',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-opacity-off': {
    'opacity': '1',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-hover-opacity-off:hover': {
    'opacity': '1',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-opacity-max': {
    'opacity': '0.25',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-opacity-min': {
    'opacity': '0.75',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'w3-greyscale-max': {
    'WebkitFilter': 'grayscale(100%)',
    'filter': 'grayscale(100%)'
  },
  'w3-grayscale-max': {
    'WebkitFilter': 'grayscale(100%)',
    'filter': 'grayscale(100%)'
  },
  'w3-hover-greyscale:hover': {
    'WebkitFilter': 'grayscale(100%)',
    'filter': 'grayscale(100%)'
  },
  'w3-hover-grayscale:hover': {
    'WebkitFilter': 'grayscale(100%)',
    'filter': 'grayscale(100%)'
  },
  'w3-greyscale': {
    'WebkitFilter': 'grayscale(75%)',
    'filter': 'grayscale(75%)'
  },
  'w3-grayscale': {
    'WebkitFilter': 'grayscale(75%)',
    'filter': 'grayscale(75%)'
  },
  'w3-greyscale-min': {
    'WebkitFilter': 'grayscale(50%)',
    'filter': 'grayscale(50%)'
  },
  'w3-grayscale-min': {
    'WebkitFilter': 'grayscale(50%)',
    'filter': 'grayscale(50%)'
  },
  'w3-sepia': {
    'WebkitFilter': 'sepia(75%)',
    'filter': 'sepia(75%)'
  },
  'w3-sepia-max': {
    'WebkitFilter': 'sepia(100%)',
    'filter': 'sepia(100%)'
  },
  'w3-hover-sepia:hover': {
    'WebkitFilter': 'sepia(100%)',
    'filter': 'sepia(100%)'
  },
  'w3-sepia-min': {
    'WebkitFilter': 'sepia(50%)',
    'filter': 'sepia(50%)'
  },
  'w3-text-shadow': {
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#444' }]
  },
  'w3-text-shadow-white': {
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'w3-transparent': {
    'backgroundColor': 'transparent!important'
  },
  'w3-hover-none:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }],
    'backgroundColor': 'transparent!important'
  },
  // Colors
  'w3-amber': {
    'color': '#000!important',
    'backgroundColor': '#ffc107!important'
  },
  'w3-hover-amber:hover': {
    'color': '#000!important',
    'backgroundColor': '#ffc107!important'
  },
  'w3-aqua': {
    'color': '#000!important',
    'backgroundColor': '#00ffff!important'
  },
  'w3-hover-aqua:hover': {
    'color': '#000!important',
    'backgroundColor': '#00ffff!important'
  },
  'w3-blue': {
    'color': '#fff!important',
    'backgroundColor': '#2196F3!important'
  },
  'w3-hover-blue:hover': {
    'color': '#fff!important',
    'backgroundColor': '#2196F3!important'
  },
  'w3-light-blue': {
    'color': '#000!important',
    'backgroundColor': '#87CEEB!important'
  },
  'w3-hover-light-blue:hover': {
    'color': '#000!important',
    'backgroundColor': '#87CEEB!important'
  },
  'w3-brown': {
    'color': '#fff!important',
    'backgroundColor': '#795548!important'
  },
  'w3-hover-brown:hover': {
    'color': '#fff!important',
    'backgroundColor': '#795548!important'
  },
  'w3-cyan': {
    'color': '#000!important',
    'backgroundColor': '#00bcd4!important'
  },
  'w3-hover-cyan:hover': {
    'color': '#000!important',
    'backgroundColor': '#00bcd4!important'
  },
  'w3-blue-grey': {
    'color': '#fff!important',
    'backgroundColor': '#607d8b!important'
  },
  'w3-hover-blue-grey:hover': {
    'color': '#fff!important',
    'backgroundColor': '#607d8b!important'
  },
  'w3-blue-gray': {
    'color': '#fff!important',
    'backgroundColor': '#607d8b!important'
  },
  'w3-hover-blue-gray:hover': {
    'color': '#fff!important',
    'backgroundColor': '#607d8b!important'
  },
  'w3-green': {
    'color': '#fff!important',
    'backgroundColor': '#4CAF50!important'
  },
  'w3-hover-green:hover': {
    'color': '#fff!important',
    'backgroundColor': '#4CAF50!important'
  },
  'w3-light-green': {
    'color': '#000!important',
    'backgroundColor': '#8bc34a!important'
  },
  'w3-hover-light-green:hover': {
    'color': '#000!important',
    'backgroundColor': '#8bc34a!important'
  },
  'w3-indigo': {
    'color': '#fff!important',
    'backgroundColor': '#3f51b5!important'
  },
  'w3-hover-indigo:hover': {
    'color': '#fff!important',
    'backgroundColor': '#3f51b5!important'
  },
  'w3-khaki': {
    'color': '#000!important',
    'backgroundColor': '#f0e68c!important'
  },
  'w3-hover-khaki:hover': {
    'color': '#000!important',
    'backgroundColor': '#f0e68c!important'
  },
  'w3-lime': {
    'color': '#000!important',
    'backgroundColor': '#cddc39!important'
  },
  'w3-hover-lime:hover': {
    'color': '#000!important',
    'backgroundColor': '#cddc39!important'
  },
  'w3-orange': {
    'color': '#000!important',
    'backgroundColor': '#ff9800!important'
  },
  'w3-hover-orange:hover': {
    'color': '#000!important',
    'backgroundColor': '#ff9800!important'
  },
  'w3-deep-orange': {
    'color': '#fff!important',
    'backgroundColor': '#ff5722!important'
  },
  'w3-hover-deep-orange:hover': {
    'color': '#fff!important',
    'backgroundColor': '#ff5722!important'
  },
  'w3-pink': {
    'color': '#fff!important',
    'backgroundColor': '#e91e63!important'
  },
  'w3-hover-pink:hover': {
    'color': '#fff!important',
    'backgroundColor': '#e91e63!important'
  },
  'w3-purple': {
    'color': '#fff!important',
    'backgroundColor': '#9c27b0!important'
  },
  'w3-hover-purple:hover': {
    'color': '#fff!important',
    'backgroundColor': '#9c27b0!important'
  },
  'w3-deep-purple': {
    'color': '#fff!important',
    'backgroundColor': '#673ab7!important'
  },
  'w3-hover-deep-purple:hover': {
    'color': '#fff!important',
    'backgroundColor': '#673ab7!important'
  },
  'w3-red': {
    'color': '#fff!important',
    'backgroundColor': '#f44336!important'
  },
  'w3-hover-red:hover': {
    'color': '#fff!important',
    'backgroundColor': '#f44336!important'
  },
  'w3-sand': {
    'color': '#000!important',
    'backgroundColor': '#fdf5e6!important'
  },
  'w3-hover-sand:hover': {
    'color': '#000!important',
    'backgroundColor': '#fdf5e6!important'
  },
  'w3-teal': {
    'color': '#fff!important',
    'backgroundColor': '#009688!important'
  },
  'w3-hover-teal:hover': {
    'color': '#fff!important',
    'backgroundColor': '#009688!important'
  },
  'w3-yellow': {
    'color': '#000!important',
    'backgroundColor': '#ffeb3b!important'
  },
  'w3-hover-yellow:hover': {
    'color': '#000!important',
    'backgroundColor': '#ffeb3b!important'
  },
  'w3-white': {
    'color': '#000!important',
    'backgroundColor': '#fff!important'
  },
  'w3-hover-white:hover': {
    'color': '#000!important',
    'backgroundColor': '#fff!important'
  },
  'w3-black': {
    'color': '#fff!important',
    'backgroundColor': '#000!important'
  },
  'w3-hover-black:hover': {
    'color': '#fff!important',
    'backgroundColor': '#000!important'
  },
  'w3-grey': {
    'color': '#000!important',
    'backgroundColor': '#9e9e9e!important'
  },
  'w3-hover-grey:hover': {
    'color': '#000!important',
    'backgroundColor': '#9e9e9e!important'
  },
  'w3-gray': {
    'color': '#000!important',
    'backgroundColor': '#9e9e9e!important'
  },
  'w3-hover-gray:hover': {
    'color': '#000!important',
    'backgroundColor': '#9e9e9e!important'
  },
  'w3-light-grey': {
    'color': '#000!important',
    'backgroundColor': '#f1f1f1!important'
  },
  'w3-hover-light-grey:hover': {
    'color': '#000!important',
    'backgroundColor': '#f1f1f1!important'
  },
  'w3-light-gray': {
    'color': '#000!important',
    'backgroundColor': '#f1f1f1!important'
  },
  'w3-hover-light-gray:hover': {
    'color': '#000!important',
    'backgroundColor': '#f1f1f1!important'
  },
  'w3-dark-grey': {
    'color': '#fff!important',
    'backgroundColor': '#616161!important'
  },
  'w3-hover-dark-grey:hover': {
    'color': '#fff!important',
    'backgroundColor': '#616161!important'
  },
  'w3-dark-gray': {
    'color': '#fff!important',
    'backgroundColor': '#616161!important'
  },
  'w3-hover-dark-gray:hover': {
    'color': '#fff!important',
    'backgroundColor': '#616161!important'
  },
  'w3-pale-red': {
    'color': '#000!important',
    'backgroundColor': '#ffdddd!important'
  },
  'w3-hover-pale-red:hover': {
    'color': '#000!important',
    'backgroundColor': '#ffdddd!important'
  },
  'w3-pale-green': {
    'color': '#000!important',
    'backgroundColor': '#ddffdd!important'
  },
  'w3-hover-pale-green:hover': {
    'color': '#000!important',
    'backgroundColor': '#ddffdd!important'
  },
  'w3-pale-yellow': {
    'color': '#000!important',
    'backgroundColor': '#ffffcc!important'
  },
  'w3-hover-pale-yellow:hover': {
    'color': '#000!important',
    'backgroundColor': '#ffffcc!important'
  },
  'w3-pale-blue': {
    'color': '#000!important',
    'backgroundColor': '#ddffff!important'
  },
  'w3-hover-pale-blue:hover': {
    'color': '#000!important',
    'backgroundColor': '#ddffff!important'
  },
  'w3-text-amber': {
    'color': '#ffc107!important'
  },
  'w3-hover-text-amber:hover': {
    'color': '#ffc107!important'
  },
  'w3-text-aqua': {
    'color': '#00ffff!important'
  },
  'w3-hover-text-aqua:hover': {
    'color': '#00ffff!important'
  },
  'w3-text-blue': {
    'color': '#2196F3!important'
  },
  'w3-hover-text-blue:hover': {
    'color': '#2196F3!important'
  },
  'w3-text-light-blue': {
    'color': '#87CEEB!important'
  },
  'w3-hover-text-light-blue:hover': {
    'color': '#87CEEB!important'
  },
  'w3-text-brown': {
    'color': '#795548!important'
  },
  'w3-hover-text-brown:hover': {
    'color': '#795548!important'
  },
  'w3-text-cyan': {
    'color': '#00bcd4!important'
  },
  'w3-hover-text-cyan:hover': {
    'color': '#00bcd4!important'
  },
  'w3-text-blue-grey': {
    'color': '#607d8b!important'
  },
  'w3-hover-text-blue-grey:hover': {
    'color': '#607d8b!important'
  },
  'w3-text-blue-gray': {
    'color': '#607d8b!important'
  },
  'w3-hover-text-blue-gray:hover': {
    'color': '#607d8b!important'
  },
  'w3-text-green': {
    'color': '#4CAF50!important'
  },
  'w3-hover-text-green:hover': {
    'color': '#4CAF50!important'
  },
  'w3-text-light-green': {
    'color': '#8bc34a!important'
  },
  'w3-hover-text-light-green:hover': {
    'color': '#8bc34a!important'
  },
  'w3-text-indigo': {
    'color': '#3f51b5!important'
  },
  'w3-hover-text-indigo:hover': {
    'color': '#3f51b5!important'
  },
  'w3-text-khaki': {
    'color': '#b4aa50!important'
  },
  'w3-hover-text-khaki:hover': {
    'color': '#b4aa50!important'
  },
  'w3-text-lime': {
    'color': '#cddc39!important'
  },
  'w3-hover-text-lime:hover': {
    'color': '#cddc39!important'
  },
  'w3-text-orange': {
    'color': '#ff9800!important'
  },
  'w3-hover-text-orange:hover': {
    'color': '#ff9800!important'
  },
  'w3-text-deep-orange': {
    'color': '#ff5722!important'
  },
  'w3-hover-text-deep-orange:hover': {
    'color': '#ff5722!important'
  },
  'w3-text-pink': {
    'color': '#e91e63!important'
  },
  'w3-hover-text-pink:hover': {
    'color': '#e91e63!important'
  },
  'w3-text-purple': {
    'color': '#9c27b0!important'
  },
  'w3-hover-text-purple:hover': {
    'color': '#9c27b0!important'
  },
  'w3-text-deep-purple': {
    'color': '#673ab7!important'
  },
  'w3-hover-text-deep-purple:hover': {
    'color': '#673ab7!important'
  },
  'w3-text-red': {
    'color': '#f44336!important'
  },
  'w3-hover-text-red:hover': {
    'color': '#f44336!important'
  },
  'w3-text-sand': {
    'color': '#fdf5e6!important'
  },
  'w3-hover-text-sand:hover': {
    'color': '#fdf5e6!important'
  },
  'w3-text-teal': {
    'color': '#009688!important'
  },
  'w3-hover-text-teal:hover': {
    'color': '#009688!important'
  },
  'w3-text-yellow': {
    'color': '#d2be0e!important'
  },
  'w3-hover-text-yellow:hover': {
    'color': '#d2be0e!important'
  },
  'w3-text-white': {
    'color': '#fff!important'
  },
  'w3-hover-text-white:hover': {
    'color': '#fff!important'
  },
  'w3-text-black': {
    'color': '#000!important'
  },
  'w3-hover-text-black:hover': {
    'color': '#000!important'
  },
  'w3-text-grey': {
    'color': '#757575!important'
  },
  'w3-hover-text-grey:hover': {
    'color': '#757575!important'
  },
  'w3-text-gray': {
    'color': '#757575!important'
  },
  'w3-hover-text-gray:hover': {
    'color': '#757575!important'
  },
  'w3-text-light-grey': {
    'color': '#f1f1f1!important'
  },
  'w3-hover-text-light-grey:hover': {
    'color': '#f1f1f1!important'
  },
  'w3-text-light-gray': {
    'color': '#f1f1f1!important'
  },
  'w3-hover-text-light-gray:hover': {
    'color': '#f1f1f1!important'
  },
  'w3-text-dark-grey': {
    'color': '#3a3a3a!important'
  },
  'w3-hover-text-dark-grey:hover': {
    'color': '#3a3a3a!important'
  },
  'w3-text-dark-gray': {
    'color': '#3a3a3a!important'
  },
  'w3-hover-text-dark-gray:hover': {
    'color': '#3a3a3a!important'
  },
  'w3-border-amber': {
    'borderColor': '#ffc107!important'
  },
  'w3-hover-border-amber:hover': {
    'borderColor': '#ffc107!important'
  },
  'w3-border-aqua': {
    'borderColor': '#00ffff!important'
  },
  'w3-hover-border-aqua:hover': {
    'borderColor': '#00ffff!important'
  },
  'w3-border-blue': {
    'borderColor': '#2196F3!important'
  },
  'w3-hover-border-blue:hover': {
    'borderColor': '#2196F3!important'
  },
  'w3-border-light-blue': {
    'borderColor': '#87CEEB!important'
  },
  'w3-hover-border-light-blue:hover': {
    'borderColor': '#87CEEB!important'
  },
  'w3-border-brown': {
    'borderColor': '#795548!important'
  },
  'w3-hover-border-brown:hover': {
    'borderColor': '#795548!important'
  },
  'w3-border-cyan': {
    'borderColor': '#00bcd4!important'
  },
  'w3-hover-border-cyan:hover': {
    'borderColor': '#00bcd4!important'
  },
  'w3-border-blue-grey': {
    'borderColor': '#607d8b!important'
  },
  'w3-hover-border-blue-grey:hover': {
    'borderColor': '#607d8b!important'
  },
  'w3-border-blue-gray': {
    'borderColor': '#607d8b!important'
  },
  'w3-hover-border-blue-gray:hover': {
    'borderColor': '#607d8b!important'
  },
  'w3-border-green': {
    'borderColor': '#4CAF50!important'
  },
  'w3-hover-border-green:hover': {
    'borderColor': '#4CAF50!important'
  },
  'w3-border-light-green': {
    'borderColor': '#8bc34a!important'
  },
  'w3-hover-border-light-green:hover': {
    'borderColor': '#8bc34a!important'
  },
  'w3-border-indigo': {
    'borderColor': '#3f51b5!important'
  },
  'w3-hover-border-indigo:hover': {
    'borderColor': '#3f51b5!important'
  },
  'w3-border-khaki': {
    'borderColor': '#f0e68c!important'
  },
  'w3-hover-border-khaki:hover': {
    'borderColor': '#f0e68c!important'
  },
  'w3-border-lime': {
    'borderColor': '#cddc39!important'
  },
  'w3-hover-border-lime:hover': {
    'borderColor': '#cddc39!important'
  },
  'w3-border-orange': {
    'borderColor': '#ff9800!important'
  },
  'w3-hover-border-orange:hover': {
    'borderColor': '#ff9800!important'
  },
  'w3-border-deep-orange': {
    'borderColor': '#ff5722!important'
  },
  'w3-hover-border-deep-orange:hover': {
    'borderColor': '#ff5722!important'
  },
  'w3-border-pink': {
    'borderColor': '#e91e63!important'
  },
  'w3-hover-border-pink:hover': {
    'borderColor': '#e91e63!important'
  },
  'w3-border-purple': {
    'borderColor': '#9c27b0!important'
  },
  'w3-hover-border-purple:hover': {
    'borderColor': '#9c27b0!important'
  },
  'w3-border-deep-purple': {
    'borderColor': '#673ab7!important'
  },
  'w3-hover-border-deep-purple:hover': {
    'borderColor': '#673ab7!important'
  },
  'w3-border-red': {
    'borderColor': '#f44336!important'
  },
  'w3-hover-border-red:hover': {
    'borderColor': '#f44336!important'
  },
  'w3-border-sand': {
    'borderColor': '#fdf5e6!important'
  },
  'w3-hover-border-sand:hover': {
    'borderColor': '#fdf5e6!important'
  },
  'w3-border-teal': {
    'borderColor': '#009688!important'
  },
  'w3-hover-border-teal:hover': {
    'borderColor': '#009688!important'
  },
  'w3-border-yellow': {
    'borderColor': '#ffeb3b!important'
  },
  'w3-hover-border-yellow:hover': {
    'borderColor': '#ffeb3b!important'
  },
  'w3-border-white': {
    'borderColor': '#fff!important'
  },
  'w3-hover-border-white:hover': {
    'borderColor': '#fff!important'
  },
  'w3-border-black': {
    'borderColor': '#000!important'
  },
  'w3-hover-border-black:hover': {
    'borderColor': '#000!important'
  },
  'w3-border-grey': {
    'borderColor': '#9e9e9e!important'
  },
  'w3-hover-border-grey:hover': {
    'borderColor': '#9e9e9e!important'
  },
  'w3-border-gray': {
    'borderColor': '#9e9e9e!important'
  },
  'w3-hover-border-gray:hover': {
    'borderColor': '#9e9e9e!important'
  },
  'w3-border-light-grey': {
    'borderColor': '#f1f1f1!important'
  },
  'w3-hover-border-light-grey:hover': {
    'borderColor': '#f1f1f1!important'
  },
  'w3-border-light-gray': {
    'borderColor': '#f1f1f1!important'
  },
  'w3-hover-border-light-gray:hover': {
    'borderColor': '#f1f1f1!important'
  },
  'w3-border-dark-grey': {
    'borderColor': '#616161!important'
  },
  'w3-hover-border-dark-grey:hover': {
    'borderColor': '#616161!important'
  },
  'w3-border-dark-gray': {
    'borderColor': '#616161!important'
  },
  'w3-hover-border-dark-gray:hover': {
    'borderColor': '#616161!important'
  },
  'w3-border-pale-red': {
    'borderColor': '#ffe7e7!important'
  },
  'w3-hover-border-pale-red:hover': {
    'borderColor': '#ffe7e7!important'
  },
  'w3-border-pale-green': {
    'borderColor': '#e7ffe7!important'
  },
  'w3-hover-border-pale-green:hover': {
    'borderColor': '#e7ffe7!important'
  },
  'w3-border-pale-yellow': {
    'borderColor': '#ffffcc!important'
  },
  'w3-hover-border-pale-yellow:hover': {
    'borderColor': '#ffffcc!important'
  },
  'w3-border-pale-blue': {
    'borderColor': '#e7ffff!important'
  },
  'w3-hover-border-pale-blue:hover': {
    'borderColor': '#e7ffff!important'
  }
});
