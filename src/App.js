import './App.css';
import Navbar from './components/navbar';
import PropTypes from 'prop-types'
import Form from './components/form'

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <Form heading="Welcome to the Text Utility :"></Form>
    </>
  );
}

Navbar.PropTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

export default App;
