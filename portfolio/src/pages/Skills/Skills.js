function Skills(){
    return(
        <div>
            <p>Skills</p>
            <div class="flex flex-row flex-wrap">
                <div class="w-1/2 h-screen bg-red-200">
                    <p class="text-2xl">Computer Language</p>
                    <p class="text-base">Python / C / HTML / CSS</p>
                    <p class="text-2xl">Software Skill</p>
                    <p class="text-base">Adobe Photoshop</p>
                    <p class="text-base">Adobe Illustrator</p>
                    <p class="text-base">Adobe XD</p>
                </div>
                <div class="w-1/2 h-screen bg-red-400 flex flex-row flex-wrap">
                    <div class="w-1/2 h-1/2 border border-2 bg-red-50">
                        <img src="vector.svg"></img>
                        UX/UI Design
                    </div>
                    <div class="w-1/2 h-1/2 border border-2 bg-red-50">
                        Graphic Design
                    </div>
                    <div class="w-1/2 h-1/2 border border-2 bg-red-50">
                        Web Design
                    </div>
                    <div class="w-1/2 h-1/2 border border-2 bg-red-50">
                        <i class="fas fa-code"></i>
                        Web Developer
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Skills;