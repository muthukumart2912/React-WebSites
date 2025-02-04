import React from 'react'


const Contact = () => {
  return (
    <section className="bg-gray-200" id='contact' >
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md " data-aos="fade-up" data-aos-duration="3000">
        <h2 className="mb-4 text-4xl tracking-wide font-normal  text-center text-gray-800 dark:text-white">Contact Me</h2>
        <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="demo@gmail.com" required/>
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let me know how I can help you" required/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600">Send message</button>
        </form>
    </div>
  </section>
  )
}

export default Contact
