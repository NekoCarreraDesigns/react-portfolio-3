import React from "react";
import "./Jams.css";

function Jams () {
    return (
        <div size="fluid" className="body">
        <p className="tidbit">Not only am I passionate about web development I love music too, I play the drums, guitar, bass, and the keyboards.
        I have posted some songs that I like to jam while I write code, sing in the shower, or shake my booty to while I make dinner
        </p>
        <iframe className="fresh-cuts" alt="youtube-player-0" title="video-player" src="https://www.youtube.com/embed/bRO-Bch4nvc"></iframe>
        <p className="tidbit">Dance With the Dead is dance rock band from Orange County California, comprised of Tony Kim, and Justin Pointer, the group is influenced by heavy metal music, and the synth production of John Carpenter</p>
        <iframe className="fresh-cuts" alt="youtube-player-1" title="video-player"  src="https://www.youtube.com/embed/8m6wrCCRvm8"></iframe>
        <p className="tidbit">Seu Jorge is a Brazilian Samba artist who came to fame from appearing in the Wes Anderson film The Life Aquatic With Steve Zissou, playing portuguese versions of David Bowie songs</p>
        <iframe className="fresh-cuts" alt="youtube-player-2" title="video-player" src="https://www.youtube.com/embed/JRMobFKG-a4"></iframe>
        <p className="tidbit">Guided By Voices has been a favorite of mine for quite sometime led by high kicking former English teacher Robert Pollard, who is a prolific songwriter, the Dayton, Ohio
        quintet has put out 30 albums, this was the classic line up before they took a two year hiatus</p>
        
        </div>
    )
}

export default Jams;