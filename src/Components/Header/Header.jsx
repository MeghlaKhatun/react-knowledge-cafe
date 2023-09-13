import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex justify-between items-center p-4 border-b-2 mt-[20px]'>
             <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
             <img src={profile} ></img>
        </div>
    );
};

export default Header;