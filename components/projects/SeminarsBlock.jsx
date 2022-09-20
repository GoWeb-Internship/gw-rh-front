import Container from '../reusable/Container';

const SeminarsBlock = ({ data }) => {
  const { title, videoList } = data;
  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {!!videoList.length && (
          <ul>
            {videoList.map(
              ({ id, videoID, videoTitle, location, published }) => (
                <li key={id}>
                  <div className="h-12 flex items-center bg-slate-400">
                    {videoID}
                  </div>
                  <h3>{videoTitle}</h3>
                  <div>
                    <p>{location}</p>
                    <p>{published}</p>
                  </div>
                </li>
              ),
            )}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default SeminarsBlock;
