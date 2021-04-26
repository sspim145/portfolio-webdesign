function Home(){
    return(
        <div>
            <p>Home</p>
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 h-96 bg-red-200 justify-center">
                    <div class="bg-green-200 content-center">
                    <p class="text-2xl">Hi I'm Pimwaree</p>
                    <p class="text-base">I am studying at King Mongkut's Institute of 
                        Technology Ladkrabang. Faculty of Information Technology,The field of Multimedia and Game Development</p>
                    <p class="text-base">Email : pim_waree@hotmail.com</p>
                    </div>
                </div>
                <div class="w-1/2 h-96 bg-red-400">
                    <img src="https://via.placeholder.com/300x300" className=""></img>
                </div>
            </div>
            <div class="flex flex-row flex-wrap">
            <div class="w-1/2 h-96 bg-red-400">
                    <img src="https://via.placeholder.com/300x300" className=""></img>
                </div>
                <div class="w-1/2 h-96 bg-red-200">
                    <p class="text-2xl">My interest</p>
                    <p class="text-base">I am passionate about UX design, and I think they are fun because they are the 
                    perfect fit for my daily life. I am a technology enthusiast and I love to study patterns, design applications, 
                    and keep updating new functions. If you have a problem designing UX I can help you.</p>
                </div>
            </div>
        </div>
    )
}
export default Home;