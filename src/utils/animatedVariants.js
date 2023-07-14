export const imageVariant = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 50, duration: 1.5 },
  },
};

export const pop = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", bounce: 0.6, duration: 2 },
  },
};

export const popButton = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 100, duration: 1.5 },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "crossfade", duration: 1.2 },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeInY = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
