function Nav(){
    return(

            <div class="w-full h-16 bg-red-100 flex flex-row content-center">
                <div class="flex flex-row bg-gray-100">
                    <a href="/"><div class="self-center"><p>Home</p></div></a>
                    <a href="/skills"><div><p>Skills</p></div></a>
                    <a href="/port"><div><p>Portfolio</p></div></a>
                </div> 
                <div class="flex flex-row  bg-white">
                    <a href="#"><div>1</div></a>
                    <a href="#"><div>2</div></a>
                    <a href="#"><div>3</div></a>
                    <a href="#"><div>4</div></a>
                    <a href="/aboutme"><div class="w-15 h-10 bg-green-100">About me!</div></a>
                </div>
            </div>
    )
}
export default Nav;