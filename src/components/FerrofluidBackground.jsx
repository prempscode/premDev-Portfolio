import { Ferrofluid } from "@/components/Ferrofluid";

const FerrofluidBackground = () => {
  return (
    <div style={{ width: "1080px", height: "1080px", position: "relative" }}>
      <Ferrofluid
        colors={["#3B82F6", "#3B82F6", "#3B82F6"]}
        speed={0.5}
        scale={1.6}
        turbulence={1}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2.5}
        shimmer={1.5}
        glow={2}
        flowDirection="down"
        opacity={1}
        mouseInteraction
        mouseStrength={1}
        mouseRadius={0.35}
      />
    </div>
  );
};

export default FerrofluidBackground;
