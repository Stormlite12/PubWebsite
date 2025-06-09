
export default function SkewedMarquee({className=""}) {
  return (
    <div className={`skewed-marquee ${className}`}>    
      <div className="line top absolute z-2 w-full" />
    <div className="marquee z-10 tracking-widest uppercase">
  GUINNESS • IPA • OLD FASHIONED • ESPRESSO MARTINI • MOJITO • WHISKEY SOUR • PINA COLADA • MARGARITA • STOUT • CRAFT BEER • NEGRONI • BLOODY MARY • RUM & COKE • SANGRIA • MOSCOW MULE • GUINNESS • IPA • OLD FASHIONED • ESPRESSO MARTINI • MOJITO • WHISKEY SOUR • PINA COLADA • MARGARITA • STOUT • CRAFT BEER • NEGRONI • BLOODY MARY • RUM & COKE • SANGRIA • MOSCOW MULE
</div>

      <div className="line bottom absolute z-2 w-full " />
    </div>
  );
}
