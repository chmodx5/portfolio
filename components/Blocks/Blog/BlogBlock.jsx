import React from "react";
import Button from "../../General/Button";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import BlogPostCard from "./BlogPostCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogBlock() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="py-20">
      <div className="container mx-auto grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-4">
          <div className="bg-gray-900 text-white px-14 py-16 w-full">
            <HeadingWithEffect
              large
              subtitle="news"
              title="latest blog posts"
            />
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam
              quas neque nisi soluta laborum dignissimos mollitia, reiciendis ex
              minus beatae non odio dolorem repellendus fugiat perspiciatis id
              dolor earum.
            </p>
            <br />
            <br />
            <Button link="/blog" text="view updates" />
          </div>
        </div>
        <div className="col-span-8">
          <Slider {...settings}>
            <BlogPostCard /> <BlogPostCard /> <BlogPostCard /> <BlogPostCard />
            <BlogPostCard /> <BlogPostCard />
          </Slider>
        </div>
      </div>
    </div>
  );
}
