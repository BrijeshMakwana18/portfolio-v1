let sr = null;
if (typeof window !== "undefined") {
  const ScrollReveal = require("./scrollreveal").default;
  sr = ScrollReveal();
}

export default sr;
