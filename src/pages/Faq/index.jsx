import React from 'react'

const Faq = () => {
  return (
    <section className="bg-white text-gray-800 mb-20">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          
          <div>
            <h3 className="font-semibold">What is Zwinish?</h3>
            <p className="mt-1 text-gray-600">
              Zwinish is a sleek, modern blogging platform built by a Moroccan software engineer with a passion for storytelling, code, and culture. It’s a space where high-quality content meets strong opinions, clean design, and purposeful writing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">What kind of content does Zwinish offer?</h3>
            <p className="mt-1 text-gray-600">
              We talk about *everything*: tech, software engineering, cybersecurity, deep dives into dev culture, personal growth, Morocco's digital future, and even the occasional spicy take on the industry. If it's real, smart, and worth reading — it belongs on Zwinish.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Who is behind Zwinish?</h3>
            <p className="mt-1 text-gray-600">
              Zwinish was founded and is maintained by a 20-year-old Moroccan full-stack dev & cybersecurity student. It’s more than a blog — it’s a personal mission to elevate voices, ideas, and creativity from the next-gen tech community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is the content really high quality?</h3>
            <p className="mt-1 text-gray-600">
              Absolutely. Every post is curated with intention. No fluff, no clickbait. Just strong, thoughtful writing powered by real experience, curiosity, and a deep love for clean code and meaningful ideas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Can I contribute to Zwinish?</h3>
            <p className="mt-1 text-gray-600">
              For now, Zwinish is a solo project — but we’re always open to collaborations, guest posts, and feedback. If you've got a cool idea or story, slide into the DMs or hit us up through the contact page.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Why the name “Zwinish”?</h3>
            <p className="mt-1 text-gray-600">
              “Zwin” means “cool” or “awesome” in Moroccan Arabic — and Zwinish is all about celebrating what’s dope, creative, and worth sharing. It’s local flavor with a global vibe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Faq;