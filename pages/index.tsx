import { Layout } from "components/common";
import { Card } from "components/post";

const Home = () => {
  return (
    <div>
      <Card
        author="Kim"
        date="August 6, 2022"
        image=""
        tags={["Marketing", "Next.js"]}
        title="Hello world!"
      />
    </div>
  );
};

Home.Layout = Layout;

export default Home;
