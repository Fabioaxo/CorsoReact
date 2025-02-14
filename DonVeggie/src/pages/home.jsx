import Navbar from "../components/navbar";
import Footer from "../components/footer";
function recipes() {
    return (
        <>
            <Navbar />
            
            <div className="bg-gray-100  mt-20  flex flex-col  ">
                <div className="flex-col align-center  justify-center mr-5 items-center ">
                    <h1 className=" text-gray-800 text-lg font-serif flex justify-center">Recipes that are healthy and delicious.</h1>
                    <p className="text-green-700 text-lg font-serif flex justify-center ">This idea was born from the aim of showing the variety of recipes </p>
                    <p className="text-green-700 text-lg font-serif flex justify-center ">that can be made with the exclusive use of vegetarian food.</p>
                    <p className="text-green-700 text-lg font-serif flex justify-center">We have a wide range of vegetarian recipes that are easy to make and can be prepared in a short time.</p>
                </div>
                <div className="flex flex-row justify-around mt-5  " id="img9">
                 
                   <img  className=" w-1/4  h-2/3 rounded-full shadow-xl " id="img10"src="https://plus.unsplash.com/premium_photo-1664648119217-8ea44b48317e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGN1Y2luYSUyMHZlZ2V0YXJpYW5hfGVufDB8fDB8fHww" alt="" />
                   <img className="w-1/4 h-2/3 rounded-full shadow-xl" id="img10" src="https://plus.unsplash.com/premium_photo-1664647731630-0a2422c30137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VjaW5hJTIwdmVnZXRhcmlhbmF8ZW58MHx8MHx8fDA%3D" alt=""/>
                   <img className="w-1/4 h-2/3 rounded-full shadow-xl"id="img10" src="https://plus.unsplash.com/premium_photo-1664648005776-d357bc76d2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VjaW5hJTIwdmVnZXRhcmlhbmF8ZW58MHx8MHx8fDA%3D"/>
               
               
               
               </div>
                
            </div>
            <Footer/>

        </>
    );
}

export default recipes