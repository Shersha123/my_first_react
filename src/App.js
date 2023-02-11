
import './App.css';
import { User } from './User';

import { MovieList } from './MovieList';
import { AddColor } from './AddColor';

function App() {

  const users = [
    {
      name: "shersha",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONTl_uAlP7naEiQxC30UnvvJGZSTcXZKAovN1gyI&s"
    },
    {
      name: "vijay",
      pic: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    },
    {
      name: "aijth",
      pic: "https://thumbs.dreamstime.com/z/skilled-young-professional-looking-camera-posing-office-team-colleagues-background-successful-startup-founder-corporate-116972904.jpg"
    },
    {
      name: "surya",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-JXTGHFY17JKveGhEsuP2rz0qxFMoKb6eHg&usqp=CAU"
    }
  ]

  return (
    <div className='App'>
      {/* <User name="Shersha" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONTl_uAlP7naEiQxC30UnvvJGZSTcXZKAovN1gyI&s" />
      <User name="Vijay" pic="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
      <User name="Aijth" pic="https://thumbs.dreamstime.com/z/skilled-young-professional-looking-camera-posing-office-team-colleagues-background-successful-startup-founder-corporate-116972904.jpg" /> */}


      {/* {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))} */}

      <MovieList />
      <AddColor />
    </div>
  );
}
export default App;
