import React from 'react'

const Faq = () => {
  return (
    <section className="bg-white text-gray-800 mb-20">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">

          <div>
            <h3 className="font-semibold">What is Zwinish really about?</h3>
            <p className="mt-1 text-gray-600">
              Zwinish is your corner of the internet where life meets ideas. It’s not just tech talk — it’s stories, culture, growth, and opinions from a young Moroccan’s lens on the world. It’s all about real talk and meaningful vibes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">What kind of topics can I expect?</h3>
            <p className="mt-1 text-gray-600">
              Expect everything from deep life lessons, mindset shifts, cultural reflections, personal growth hacks, to tech as just one part of the bigger picture. If it moves you or makes you think — it belongs here.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Who’s behind this vibe?</h3>
            <p className="mt-1 text-gray-600">
              Just a 20-year-old Moroccan with a passion for sharing what matters — a student, coder, dreamer, and storyteller who believes tech is cool but life is cooler.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Is this blog curated or just random thoughts?</h3>
            <p className="mt-1 text-gray-600">
              Every piece is intentional — no fluff, no noise. Just raw, honest, and thoughtful content meant to inspire, challenge, and connect.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Can I contribute or share my story?</h3>
            <p className="mt-1 text-gray-600">
              Right now, it’s a one-person show, but collabs and guest stories are welcome. Got a story or idea that fits the vibe? Hit me up anytime.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Why the name “Zwinish”?</h3>
            <p className="mt-1 text-gray-600">
              “Zwin” means “cool” or “awesome” in Moroccan Darija. Zwinish is about celebrating the good stuff in life — the culture, the ideas, the people, and everything that makes us say “that’s dope.”
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Faq;
