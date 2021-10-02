const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
import 'jest-extended'
import '@testing-library/jest-dom'

Enzyme.configure({ adapter: new Adapter() });