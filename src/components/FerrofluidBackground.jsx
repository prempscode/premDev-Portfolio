import Ferrofluid from "./ui/Ferrofluid";

const FerrofluidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      <Ferrofluid
        dpr={1}
        colors={["#3B82F6", "#3B82F6", "#3B82F6"]}
        speed={0.5}
        scale={1.6}
        turbulence={0.5}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2.5}
        shimmer={2}
        glow={2}
        flowDirection="down"
        opacity={0.4}
        mouseInteraction={false}
      />
    </div>
  );
};

export default FerrofluidBackground;
