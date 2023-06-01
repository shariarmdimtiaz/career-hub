import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
        <div className="hidden md:block bg-[url('../public/vector1.png')] bg-no-repeat  bg-left-bottom h-[220px]">
          <h1 className="font-bold text-3xl">Blog</h1>
        </div>
      </div>
      <div className="container mx-auto text-center px-2 py-14 mt-36 md:mt-0">
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 1: When should you use context API?
          </p>
          <p className="">
            Answer 1: Context API in React is used when you need to share data
            between multiple components that are not directly connected in the
            component tree. It provides a way to pass data down the component
            tree without having to pass props through all intermediate
            components. Context API is useful when you have data that is global
            or shared across different parts of your application, such as theme
            settings, authentication state, or localization data.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">Questions 2: What is a custom hook?</p>
          <p className="">
            Answer 2: A custom hook in React is a custom function that allows
            you to reuse logic across different components. It is a way to
            encapsulate stateful logic or side effects into a reusable function
            that can be easily used in multiple components. A custom hook does
            not require a specific signature. Custom hook always starts with the
            name ‘use’.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">Questions 3: What is useRef?</p>
          <p className="">
            Answer 3: 'useRef' is a hook in React that provides a way to create
            and manage mutable references to DOM elements or other values that
            persist across component renders. It returns a mutable ref object
            that can be used to store and access the current value, which does
            not trigger a re-render when the value is updated. useRef is
            commonly used to access DOM elements directly, store previous
            values, or maintain state that should not trigger a re-render.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">Questions 4: What is useMemo?</p>
          <p className="">
            Answer 4: 'useMemo' is a hook in React that allows you to memoize
            the result of a computation, and only recompute the result when the
            dependencies change. It takes a function and an array of
            dependencies as arguments, and returns a memoized value that is
            recomputed only if any of the dependencies change. useMemo is useful
            when you have expensive computations or operations that are not
            needed to be executed on every render, and can help optimize
            performance by avoiding unnecessary recalculations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
