import picture1 from "../assets/image-web-3-mobile.jpg";
import picture2 from "../assets/image-web-3-desktop.jpg";
import AnimatedComponent from "./AnimatedComponent";
import { fade, imageVariant, pop, popButton } from "../utils/animatedVariants";

export default function Web3() {
  return (
    <section className="md-lg-text lg:col-span-4">
      <article className="overflow-hidden lg:grid lg:grid-cols-4 lg:gap-x-7 lg:gap-y-2.5">
        <picture className="col-span-4">
          <source media="(min-width: 1024px)" srcSet={picture2} />
          <AnimatedComponent
            tag="img"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            src={picture1}
            alt=""
            className="py-1 md:w-full"
          />
        </picture>
        <AnimatedComponent
          tag="h1"
          initial="hidden"
          whileInView="visible"
          variants={fade}
          className="pt-5 text-[2.5rem] font-extrabold leading-none tracking-[0.005em] lg:col-span-2 lg:text-6xl lg:leading-[0.94] lg:-tracking-[0.033em]">
          The Bright Future of Web 3.0
          <AnimatedComponent
            tag="span"
            variants={pop}
            initial="hidden"
            whileInView="visible"
            className="inline-block">
            ?
          </AnimatedComponent>
        </AnimatedComponent>
        <div className="lg:col-span-2">
          <AnimatedComponent
            tag="p"
            initial="hidden"
            whileInView="visible"
            variants={fade}
            className="py-4 leading-[1.72] text-dark-grayish-blue lg:pr-4 lg:leading-relaxed">
            We dive into the next evolution of the web that claims to put the power of the platforms back into
            the hands of the people. But is it really fulfilling its promise?
          </AnimatedComponent>
          <AnimatedComponent
            tag="a"
            variants={popButton}
            initial="hidden"
            whileInView="visible"
            whileHover={{ borderRadius: 50 }}
            href="#"
            className="btn my-2 inline-block bg-soft-red px-8 py-[0.92rem] text-sm font-bold uppercase tracking-[0.3em] text-off-white transition-colors duration-300 lg:my-[1.1rem]">
            Read More
          </AnimatedComponent>
        </div>
      </article>
    </section>
  );
}
