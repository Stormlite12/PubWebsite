export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/vicebg.png')",
          zIndex: 0,
        }}
      />


  

      {/* Foreground Content */}
      <div className="relative z-15">
        {children}
      </div>

 
    </div>
  );
}
