import Header from "./Header"
import Hero from "./Hero"

const Videowrapper=()=>{
    return (
        <div className="relative h-[90vh] overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
 
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/assets/drink3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content (Header + Hero) */}
  <div className="relative z-10">
   
  </div>
</div>

    )
}

export default Videowrapper;