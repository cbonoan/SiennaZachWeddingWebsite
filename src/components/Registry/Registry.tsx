import { Button } from "react-bootstrap";
import "../../styles/Registry/Registry.scss";

const Registry = () => {
  return (
    <div className="registry-content">
      <span>
        Many of you are traveling to celebrate with us in Hawaii, so your
        presence means the world to us and is all we ask for. If you'd still
        like to contribute to our registry or honeymoon funds, please use the
        link below. Thank you!
      </span>
      <Button variant="light">
        <a
          href="https://withjoy.com/sienna-and-zachary-apr-25/registry"
          target="_blank"
        >
          S&Z Registry
        </a>
      </Button>
    </div>
  );
};

export default Registry;
