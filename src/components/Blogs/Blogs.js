import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs py-5">
      <div className="container mb-5">
        <h1>1. What is Context Api?</h1>
        <p>
          <strong className="text-secondary fs-4 "> Ans:</strong> The React
          Context API is a way for a React app to effectively produce global
          variables that can be passed around. This is the alternative to "prop
          drilling" or moving props from grandparent to child to parent, and so
          on. React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store.{" "}
        </p>
        <h1>2.What is Semantic tag?</h1>
        <p>
          <strong className="text-secondary fs-4"> Ans:</strong> Semantic HTML
          tags provide information about the contents of those tags that goes
          beyond just how they look on a page.Using semantic tags gives you many
          more hooks for styling your content. Semantic tags make it clear to
          the browser what the meaning of a page and its content is.That clarity
          is also communicated with search engines, ensuring that the right
          pages are delivered for the right queries. some semantic tag example{" "}
          <strong>abbr,acronym, blockquote,address,div etc.</strong>
        </p>
        <h1>3.Difference Inline,Inline Block, Block.</h1>
        <p>
          <strong className="text-secondary fs-4"> Ans:</strong>{" "}
          <strong>Inline</strong> - elements that take up only as much space as
          needed and can fit around other elements on the same line. For
          example, link elements (a) will fit on the same line as other text and
          will not show up on a new line nor take more space than is needed.
          <br />
          <strong>block</strong> - A block element will take up the full width
          available to it by default, which does not allow for other elements to
          appear on the same line. <br />
          <strong>inline-block</strong> - Like inline elements but can also have
          a width and a height to separate itself from nearby elements. Can
          appear on the same line as other elements by default, though inherits
          some properties of a block (given that it can have a width and
          height).
        </p>
      </div>
    </section>
  );
};

export default Blogs;
