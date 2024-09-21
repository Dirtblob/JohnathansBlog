import Particles from "react-tsparticles";
import {useMemo} from "react";
import { useCallback } from "react";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars = () => {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      await loadStarsPreset(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);
  
    const options = {
      preset: "stars",
      size: {
        value: { min: 0.05, max: 0.15 }
      }
    };
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    );
}

export default Stars;