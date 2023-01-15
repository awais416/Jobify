import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import { Logo } from '../components'

const Landing = () => {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className="container page"></div>
      <div className="info">
        {/* Info */}
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>Hello blah</p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
    </main>
  )
}

export default Landing
