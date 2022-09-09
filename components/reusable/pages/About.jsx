const About = ({ data }) => (
  <>
    <section>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.goal}</p>
      </div>
    </section>
  </>
);

export default About;
