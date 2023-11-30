import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="flex justify-between font-sans font-normal">
      <p className='font-medium text-xl'>Victor Alexander</p>
      <Navigation />
    </header>
  )
}

export default Header;