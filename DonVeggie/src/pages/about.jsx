import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen items-center justify-center mt-20  ">
                <img src="https://cdn-icons-png.freepik.com/256/12861/12861602.png?ga=GA1.1.92963224.1729475491&semt=ais_hybrid" alt="" className="w-14 ml-12"/>
            <img src="https://img.icons8.com/?size=80&id=0rOyAyRWbAiR&format=png" alt="" className="w-14" />
            <p className="text-gray-700 text-lg font-bold mt-5">If you want to know more about us you can visit our <a  target="_blank" className="text-green-600 blank" href="https://spoonacular.com/food-api">API here</a></p>
            </div>
            <Footer/>
        </>

    );
}

export default About