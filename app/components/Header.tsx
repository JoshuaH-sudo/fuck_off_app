import { ExitIcon, HomeIcon } from "@radix-ui/react-icons";
import { Form, Link } from "@remix-run/react";

const Header = () => {
  return (
    <div className="flex w-full justify-between align-middle top-0 p-2">
      <Link to="/">
        <div className="rounded-full bg-blue-500 hover:bg-blue-700 p-2">
          <HomeIcon
            height={35}
            width={35}
          />
        </div>
      </Link>

      <Form
        action="/logout"
        method="post"
      >
        <button type="submit">
          <div className="rounded-full bg-blue-500 hover:bg-blue-700 p-2">
            <ExitIcon
              height={35}
              width={35}
            />
          </div>
        </button>
      </Form>
    </div>
  );
};

export default Header;
