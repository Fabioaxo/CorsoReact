import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex  mt-0 bg-green-950 w-screen h-20 ' >
            <div className='flex w-1/2  items-center ml-5 '>
               <p className='text-2xl text-white font-bold tracking-widest '>DonVeggie</p>
               <img src="https://cdn-icons-png.freepik.com/256/16947/16947770.png?ga=GA1.1.92963224.1729475491&semt=ais_hybrid" className='w-16 items-left' alt="logo"/>
            </div>
            <div className='flex w-1/2 justify-between mr-5 items-center'> 
            <Link className='' to={"/home"}><img src="https://img.icons8.com/?size=80&id=109681&format=png" className='w-16 hover:scale-110 transition-transform duration-200' alt="home"/></Link>
            <Link className='' to={"/recipes"}><img src="https://img.icons8.com/?size=80&id=AXKi0XGZeq0Z&format=png"className='w-12 hover:scale-110 transition-transform duration-200'  alt="recipes"/></Link>
            <Link className='' to={"/about"}><img src="https://img.icons8.com/?size=80&id=mHpzpCOQXE4k&format=png"className='w-16 hover:scale-110 transition-transform duration-200' alt="about"/></Link>
        </div>
        </div>
    );
};

export default Navbar