import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';

function App() {
  let todos = [
    {
      srno: 1,
      title: "Study",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos maxime dignissimos quo voluptate veniam",
    },
    {
      srno: 2,
      title: "Work",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos maxime dignissimos quo voluptate veniam",
    },
    {
      srno: 3,
      title: "Task",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos maxime dignissimos quo voluptate veniam",
    },
  ];

  return (
    <>
      <Header />
      <Todo todos={todos} />
      <Footer />
    </>
  );
}

export default App;
