



const AboutUsSection = function(){

    return(
       

        <div className="flex flex-col w-screen h-52 bg-body-gray items-center justify-center gap-8 mt-32" >
            <div className="w-4/5 h-fit  flex flex-row justify-between align-baseline">
                <h1 className="w-fit text-3xl font-bold">About Us</h1>
                <a className="w-fit h-fit hover:text-lang-orange" href="./about">learn more about us</a>
            </div>
            <div className="w-4/5"><p className="break-normal">The Langara Computer Science Club is a student-led club dedicated to providing a space for students interested in computer science. We provide a space to learn, create, network, and to have fun! We hold workshops, programming competitions, and other meetups</p></div>
        </div>
        
        
        
        
      
    )

}

export default AboutUsSection