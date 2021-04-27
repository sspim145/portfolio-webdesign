import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Port(){
    return(
        <div class="pt-20">
            
            <div class="grid sm:grid-cols-3 md:grid-cols-6 gap-4 p-5">
                <a href="/port/project6">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">Graphic Design</div></center></a>
                <a href="/port/project1">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">Animation</div></center></a>
                <a href="/port/project2">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">Object Model</div></center></a>
                <a href="/port/project3">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">Website</div></center></a>
                <a href="/port/project4">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">Game Map</div></center></a>
                <a href="/port/project5">
                <center>
                <div class="h-10 rounded-md bg-black hover:bg-yellow-500 text-white pt-2 pb-2">2D Game</div></center></a>
            </div>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route path="/port/project1">
                        <Project1/>
                    </Route>
                    <Route path="/port/project2">
                        <Project2/>
                    </Route>
                    <Route path="/port/project3">
                        <Project3/>
                    </Route>
                    <Route path="/port/project4">
                        <Project4/>
                    </Route>
                    <Route path="/port/project5">
                        <Project5/>
                    </Route>
                    <Route path="/port/project6">
                        <Project6/>
                    </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
function Project1() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">Covid-19 Animation</p>
                    <p class="text-base">This work is part of Computer Graphics and Animation.The animation depicts a story of safety during the COVID-19 epidemic. The items created in this work are one character models and most of the object models. By applying the knowledge of texturing and lighting, the workpiece will be perfected.</p>
                </div>
                <div>
                    <iframe width="540" height="300" src="https://www.youtube.com/embed/5r_eFA-8Nx4" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}
function Project2() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">Showreel Object Model</p>
                    <p class="text-base">This work is part of Computer Graphics and Animation. This work is a compilation of all custom-built object models. It is displayed in two types: model shape and finished model.</p>
                </div>
                <div>
                    <iframe width="540" height="300" src="https://www.youtube.com/embed/oWr2w9l67P8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}
function Project3() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">That's How Human Begin Website</p>
                    <p class="text-base">This work is part of Multimedia Programming. Which this project will come on the topic of superior wisdom, which is an enormous treasure The website presents the evolution of humans since the birth of the world. It lets users try to choose their own evolutionary path like A or B game.</p>
                    <br></br>
                    <a href="https://how-human-begin.netlify.app/"><p class="text-base hover:text-black text-yellow-500">Website : https://how-human-begin.netlify.app</p></a>
                </div>
                <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/KGzXaUC3CjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}
function Project4() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">The Reveries Map</p>
                    <p class="text-base">This work is part of Advance Game Development. The project itself was inspired by the Rococo era landscape scene. It is a picture that gives the feeling of being in a dream with the color tone being soft. It consists of a rocky hill and a large river in the middle. Which is the origin of the name "The Reveries"</p>
                </div>
                <div>
                    <iframe width="540" height="300" src="https://www.youtube.com/embed/2mAWbepYIRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

function Project5() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">Cat me if you cat game</p>
                    <p class="text-base">This work is part of Game Design and Development. This game is a 2D game. Side scrolling and it's an action game. The main character is a cat thief who must fight a witch and his minions to help others in their village to escape the famine.</p>
                </div>
                <div>
                    <iframe width="540" height="300" src="https://www.youtube.com/embed/OaABJdPX7Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

function Project6() {
    return (
        <div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center sm:h-full md:h-screen">
                <div class="w-300">
                    <img src="https://cdn.discordapp.com/attachments/836229450932027434/836581166144421898/head_145.png"></img>
                </div>
                <div class="w-3/5">
                    <p class="text-2xl">Logo Design</p>
                    <p class="text-base">This work is a logo design from the word dream catcher. Each design is inspired by the origin story of the dreamcatcher and the shape, structure, materials and meaning.</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center sm:h-full md:h-screen">
                <div class="w-3/5">
                    <p class="text-2xl">Poster Design I</p>
                    <p class="text-base">The poster is designed based on the logo designed above. The first poster was designed in a soft tone, looking comfortable on the eyes, creating a swaying feel like a feather attached to the rope end of a dream catcher.</p>
                </div>
                <div>
                    <img src="https://cdn.discordapp.com/attachments/836229450932027434/836580912539107338/final_61070145-1.jpg"></img>
                </div>
            </div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center sm:h-full md:h-screen">
                <div>
                    <img src="https://cdn.discordapp.com/attachments/836229450932027434/836580920601477120/final_61070145-2.jpg"></img>
                </div>
                <div class="w-3/5">
                    <p class="text-2xl">Poster Design II</p>
                    <p class="text-base">The second poster is designed in flashy black and yellow, referring to the legend of the Dream Catcher born by the Indians. That created a dream catcher as a protective amulet.</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center sm:h-full md:h-screen">
                <div>
                    <img src="https://media.discordapp.net/attachments/836229450932027434/836580703537856562/assm_145.png?width=1155&height=663"></img>
                </div>
                <div class="w-3/5">
                    <p class="text-2xl">Typography Design</p>
                    <p class="text-base">This work is designed from pieces of the English alphabet that make up the word Pimwaree. With all parts being assembled perfectly together.</p>
                </div>
            </div>
        </div>
    );
}

export default Port;