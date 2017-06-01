import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'border': {
    'borderStyle': 'solid',
    'borderWidth': '1px',
    'width': [{ 'unit': 'px', 'value': 250 }]
  },
  'select': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'text-prop': {
    'paddingRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'space': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'text-height': {
    'height': [{ 'unit': 'px', 'value': 30 }]
  }
});
