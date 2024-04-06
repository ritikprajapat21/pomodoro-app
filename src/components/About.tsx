import about from "../constant";

function About() {
  return (
    <section className="w-11/12 mx-auto mt-16 p-5 text-white">
      <h1 className="text-xl sm:text-2xl font-medium">
        {about.question}
      </h1>
      <p className="mt-5 tracking-wide opacity-70 text-lg">
        {about.answer}
      </p>
    </section>
  );
}

export default About;
