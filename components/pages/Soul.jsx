import InfoPage from "../reusable/InfoPage";

const Soul = ({data}) => {
    return <InfoPage title={data.title} description={data.description} body={data.body} quote={data.quote}/>;
};

export default Soul;