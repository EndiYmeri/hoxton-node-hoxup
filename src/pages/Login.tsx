import { User } from '../App'
import UserLoginItem from '../components/UserLoginItem'

type Props={
  users:User[],
  logIn:Function,
  setModal: Function,
}

function Login ({ users, logIn, setModal }:Props) {
  return (
    <div className='main-wrapper login'>
      <section className='login-section'>
        <h2>Choose your user!</h2>
        <ul>
          {users.map(user => (
            <UserLoginItem key={user.id} user={user} logIn={logIn} />
          ))}

          <li>
            <button
              className='user-selection'
              onClick={() => setModal('new-user')}
            >
              <h3>+ Add a new user</h3>
            </button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Login
