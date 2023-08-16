import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/AbrilThea">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/thea.abril.71?mibextid=LQQJ4d">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fitsteyangs19%3Figshid%3DOGQ5ZDc2ODk2ZA%253D%253D%26fbclid%3DIwAR1wagxwHIJyx_dIuDqyg99aJ199NNzYO4TeU5ntYeYLQeQC5Xolh4E9gvQ&h=AT0VqeGU5cNlOq7ztu-1nNQb21mQoLcemLJz7SrstF1ukwGoi8Xosyocg_xmteVN99DzYbvQvYEQdSdwj49GCJrgaBc1snOeJzIZOOfgy4sJ_04ZjCSf8glOQE8BwYfXaCdAYg">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;