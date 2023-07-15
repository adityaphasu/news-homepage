import data from "../data/articles.json";
import { fade, staggerContainer } from "../utils/animatedVariants";
import AnimatedComponent from "./AnimatedComponent";

export default function New() {
  const articles = data.new;
  return (
    <section className="md-lg-text my-14 bg-very-dark-blue px-[1.35rem] pt-[1.35rem] lg:col-span-2 lg:my-0 lg:mb-4 lg:mt-[.25rem] lg:px-[1.6rem] lg:pt-[2.1rem]">
      <AnimatedComponent
        tag="h2"
        variants={fade}
        initial="hidden"
        whileInView="visible"
        className="text-3xl font-bold text-soft-orange lg:text-[2.5rem] lg:tracking-wide">
        New
      </AnimatedComponent>
      <AnimatedComponent tag="div" initial="hidden" whileInView="visible" variants={staggerContainer}>
        {articles.map((article, index) => (
          <AnimatedComponent
            key={index}
            tag="article"
            variants={fade}
            className={`new-article border-b pb-[1.4rem] pt-[1.9rem] lg:pb-[1.4375rem] lg:pt-8
            ${index === 1 ? "lg:pb-5 lg:pt-[1.6rem] " : ""}
            ${index === 2 ? "lg:pb-7 lg:pt-[1.72rem]" : ""}`}>
            <a href="#">
              <h3 className="text-xl tracking-[0.005em] text-off-white">{article.title}</h3>
              <p className="py-[0.48rem] leading-6 text-grayish-blue lg:leading-[1.6rem]">{article.text}</p>
            </a>
          </AnimatedComponent>
        ))}
      </AnimatedComponent>
    </section>
  );
}
