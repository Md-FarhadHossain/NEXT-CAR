import React from 'react'

const Blog = () => {
    const blogs = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: `State represents the value of a dynamic properties of a React component at a given instance.React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this. state member variable of the component.React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.`
        },
        {
            id: 2,
            question: 'How does prototypical inheritance work?',
            answer: `Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.`
        },
        {
            id: 3,
            question: 'What is a unit test? Why should we write unit tests?',
            answer: `A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.`
        },
        {   
            id: 4,
            question: 'React vs. Angular vs. Vue?',
            answer: `Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability.t's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.React is better than Angular due to it's virtual DOM implementation and rendering optimizations. Migrating between React's versions is quite easy, too; you don't need to install updates one by one, as in the case of Angular. Finally, with React, developers have myriads of existing solutions they can use.`
        },
    ]
  return (
    <div className='lg:px-0 px-4'>
        {
            blogs.map(blog => <div key={blog.id} className="mockup-window border container mx-auto my-8">
            <div className="flex justify-center flex-col px-4 py-16 bg-base-200">
                <h1 className="text-3xl font-semibold mb-4">{blog.question}</h1>
                <p>{blog.answer}</p>
            </div>
          </div>)
        }
    </div>
  )
}

export default Blog