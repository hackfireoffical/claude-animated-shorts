import React from "react";
import { Composition } from "remotion";
import { BridgeShort, BRIDGE_FRAMES } from "./videos/bridge/Bridge";

// To render a new short: copy templates/bridge to another folder, then add one <Composition> per short here
// and change the composition id in .github/workflows/render.yml.
export const Root: React.FC = () => (
  <Composition id="BridgeShort" component={BridgeShort} durationInFrames={BRIDGE_FRAMES} fps={30} width={1080} height={1920} />
);
