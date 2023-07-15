import data from "../data/articles.json";
import { fadeInY, staggerContainer } from "../utils/animatedVariants";
import AnimatedComponent from "./AnimatedComponent";

export default function Trending() {
  const articles = data.trending;

  return (
    <section className="flexed py-12 pt-1 lg:col-span-6">
      <h2 className="sr-only">Trending Articles</h2>
      <AnimatedComponent
        tag="div"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="flexed lg:gap-x-8 ">
        {articles.map((article) => (
          <AnimatedComponent
            tag="article"
            key={article.number}
            variants={fadeInY}
            className="trending-article pb-8 ">
            <a href="#" className="flex gap-6 lg:max-w-[22.8rem]">
              <img src={article.img} alt="" className="mt-0.5 w-[6.25rem]" />
              <div>
                <span className="text-3xl font-extrabold text-grayish-blue">0{article.number}</span>
                <h3 className="py-2 text-lg tracking-[0.006em]">{article.title}</h3>
                <p>{article.text}</p>
              </div>
            </a>
          </AnimatedComponent>
        ))}
      </AnimatedComponent>
    </section>
  );
}
