function Nav(){
    return(

            <div class="w-full h-20 bg-white shadow-md fixed flex flex-row items-center z-20">
                <div class="grid grid-cols-5 gap-2">
                    <div class="col-start-2 col-span-4 w-28 h-16">
                        <div class=""><p class="pt-4 text-3xl font-mono font-bold">SSPIM</p></div>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <div class="justify-self-center hover:text-yellow-500"><a href="/"><p>Home</p></a></div>
                    <div class="justify-self-center hover:text-yellow-500"><a href="/port/project1"><p>My Projects</p></a></div>
                    <div class="justify-self-center hover:text-yellow-500"><a href="/activity"><p>Activity</p></a></div>
                </div>
                <div class="grid grid-cols-5 gap-1 justify-end">
                    <div class="w-6 h-6"><a href="https://web.facebook.com/pimwaree.kromsuriyasak/"><img src="https://cdn.discordapp.com/attachments/836229450932027434/836514482313494558/facebook.png"></img></a></div>
                    <div class="w-6 h-6"><a href="https://www.instagram.com/sspim/?hl=th"><img src="https://cdn.discordapp.com/attachments/836229450932027434/836514499669262346/instagram.png"></img></a></div>
                    <div class="w-6 h-6"><a href="https://twitter.com/imsspp"><img src="https://cdn.discordapp.com/attachments/836229450932027434/836514505793470494/twitter.png"></img></a></div>
                    <div class="w-6 h-6"><a href="https://github.com/sspim145"><img src="https://cdn.discordapp.com/attachments/836229450932027434/836514496674660352/github.png"></img></a></div>
                </div>
                <div class="w-15 h-10 bg-black text-white rounded-md p-2 hover:bg-yellow-500 justify-end"><a href="/aboutme">About me!</a></div>
            </div> 
    )
}
export default Nav;