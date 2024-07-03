import PropTypes from "prop-types";

import { MdOutlineMail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Detail = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-blue-900 rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0 pl-4 py-5">
          <img
            src={user.image}
            alt={user.name}
            className=" w-full h-48 object-cover md:w-48 rounded-xl"
          />
        </div>
        <div className="p-8">
          <h2 className="block text-lg leading-tight font-medium text-black">
            {user.name}
          </h2>
          <div className="uppercase tracking-wide mt-2 text-sm text-indigo-500 font-semibold">
            {user.position}
          </div>
          <p className=" text-gray-500">{user.workplace}</p>
          <div className="mt-4 space-y-2 flex gap-4 items-center">
            <a
              href={`mailto:${user.email}`}
              className="block pt-2 text-blue-600 hover:underline"
            >
              <MdOutlineMail className="text-lg"/>
            </a>
            <a
              href={user.googleScholar}
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleScholar />
            </a>
            <a
              href={user.github}
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={user.linkedin}
              className="block text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    workplace: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    googleScholar: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default Detail;
