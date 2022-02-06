import ThemeToggle from './ThemeToggle'

const Header = () => {
    return (
        <header className='flex justify-between md:justify-around items-center p-4'>
            <h1 className='text-2xl'>DevFinder</h1>
            <ThemeToggle />
        </header>
    )
}

export default Header