import { motion, useReducedMotion } from "framer-motion";

const AnimatedComponent = ({ tag, variants, ...otherProps }) => {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? "visible" : variants;

  return (
    <MotionTag viewport={{ once: true, threshold: 1 }} variants={shouldAnimate} {...otherProps}></MotionTag>
  );
};

export default AnimatedComponent;
