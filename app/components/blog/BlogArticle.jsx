import { BiSolidQuoteAltRight } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { TbMessageDots } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
export default function BlogArticle() {
  return (
    <article className="lg:w-[730px] lg:mt-12">
      {/* Blog Heading */}
      <section className="flex flex-col gap-2 mb-10">
        <header>
          <Heading1 text=" 20 cool fonts for web and graphic design" />
        </header>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <BloggerProfile
            imgUrl="/images/placeholder.png"
            bloggerName="Some One"
            alt="Placeholder"
          />
          <div className="flex items-center gap-4 sm:gap-6">
            <MetaData
              icon={<CiCalendar className="text-blue-500" />}
              data="Nov, 12 2021"
            />
            <MetaData
              icon={<TbMessageDots className="text-blue-500" />}
              data="20 comments"
            />
          </div>
        </div>
      </section>

      {/* Blog Body */}
      <section>
        <PostImage imgUrl="/images/placeholder.png" alt="some placeholder" />

        <Heading2
          text="Check out these 20 cool fonts for your next web or graphic design project.
      Typography, font, and typeface are focal design elements."
        />

        <Pragraph
          text="Their aesthetic nature influences people's perception of a brand,
          making font all the more necessary for digital designers to consider
          when designing for the web and beyond. Font goes the extra mile. It
          cements a brand's messaging, aligning a brand to its target audience
          with each line of header text and subtext within a web design. Below
          you'll find 20 cool fonts worth checking out for personal use or your
          next web or graphic design project. And don't worry, we've included
          both free and paid fonts!"
        />

        <Pragraph
          text="The Graphik family has 18 different styles, from bold to regular,
          compact light, semibold, medium, and so on. Graphik is a gorgeous
          typeface with a wide range of font styles, each contemporary in its
          own respect."
        />

        <BlockquoteBox
          text=" Vintage meets vogue is the only way to describe this serif typeface.
            Neue World encompasses the mode high-fashion aesthetic of the 1960s
            with a commercial take."
        />

        <Heading2 text=" EB Garamond and Relative (free+paid)." />

        <Pragraph
          text=" Relative is an OpenType sans-serif font known for its range. Designed
          by The Entente in 2011, this type font family comes in two halves:
          Book to Black (with italics) and faux monospace. This range gives you
          versatility and readability. Coming in four weights and 12 styles,
          Relative is great for both personal and commercial use due to its
          duality."
        />

        <Pragraph
          text="If you're looking for a serif font that is both girly and refined but
          want to explore typefaces outside of the typical Playfair Display, EB
          Garamond is the font you've been seeking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              className="w-full h-[234px] object-cover rounded-lg"
              src="/images/placeholder.png"
              alt="Blog content illustration"
            />
          ))}
        </div>

        <div className="flex items-center gap-6 mt-10">
          <p>Share this post</p>
          <ShareBox icon={<FaFacebookF />} name="facebook" />
          <ShareBox icon={<FaFacebookF />} name="facebook" />
          <ShareBox icon={<FaFacebookF />} name="facebook" />
        </div>
      </section>
    </article>
  );
}

function Heading1({ text }) {
  return (
    <h1 className="font-medium text-2xl lg:text-3xl leading-tight lg:leading-12">
      {text}
    </h1>
  );
}

function Heading2({ text }) {
  return <h2 className="font-medium text-2xl leading-8 my-6">{text}</h2>;
}

function Pragraph({ text }) {
  return <p className="text-base leading-6 text-gray-600 my-4">{text}</p>;
}

function BloggerProfile({ imgUrl, alt, bloggerName }) {
  return (
    <div className="flex items-center gap-3">
      <img
        className="rounded-full w-10 h-10 object-cover"
        src={imgUrl}
        alt={alt}
      />
      <p className="text-gray-600">{bloggerName}</p>
    </div>
  );
}

function MetaData({ icon, data }) {
  return (
    <div className="flex items-center gap-2" aria-label="Publish Date">
      {icon}
      <p className="text-gray-500">{data}</p>
    </div>
  );
}

function PostImage({ imgUrl, alt }) {
  // for single big image
  return (
    <div className="w-full h-[424px] my-4">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={imgUrl}
        alt={alt}
      />
    </div>
  );
}

function BlockquoteBox({ text }) {
  return (
    <div className="flex gap-4 bg-blue-50 p-6 lg:p-8 my-6 rounded-lg">
      <div className="text-blue-500 text-2xl">
        <BiSolidQuoteAltRight />
      </div>
      <blockquote className="text-xl leading-8">{text}</blockquote>
    </div>
  );
}

function ShareBox({ icon, name }) {
  return (
    <div className="flex gap-3 shadow-md py-2 px-4">
      <div>{icon}</div>
      <p>{name}</p>
    </div>
  );
}
