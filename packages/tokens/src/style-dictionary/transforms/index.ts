import { registerTransformName } from "./transformName";
import { registerTransformShadows } from "./transformShadows";

export default function registerTransforms() {
  registerTransformName();
  registerTransformShadows();
}
