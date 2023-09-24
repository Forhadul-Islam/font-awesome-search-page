/* eslint-disable react/no-unescaped-entities */
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-sky-950 text-white">
      <div className="container grid grid-cols-12 py-10">
        <div className="col-span-6 w-5/6 ">
          <div className="text-blue-500 text-3xl mb-8">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <h3 className="text-gray-200 text-md font-semibold mb-4">
            Go Make Something Awesome
          </h3>
          <span className="text-gray-300 block mb-3">
            Font Awesome is the internet's icon library and toolkit used by
            millions of designers, developers, and content creators.
          </span>
          <span className="text-gray-300 block mb-3">
            Made with and in Bentonville, Boston, Chicago, Grand Rapids, Joplin,
            Kansas City, Seattle, Tampa, and Vergennes.
          </span>
          <div className="text-gray-400  mb-3 w-5/6 text-sm flex justify-between">
            <span>Licence</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Refund</span>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-gray-500 mb-3">Project</h3>
          <ul>
            <li className="text-gray-300 mb-3">Download</li>
            <li className="text-gray-300 mb-3">Changelog</li>
            <li className="text-gray-300 mb-3">Commision Icons</li>
            <li className="text-gray-300 mb-3">All Versions</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="text-gray-500 mb-3">Community</h3>
          <ul>
            <li className="text-gray-300 mb-3">GitHub</li>
            <li className="text-gray-300 mb-3">Icon Requests</li>
            <li className="text-gray-300 mb-3">Twiter</li>
            <li className="text-gray-300 mb-3">Blog Awesome</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="text-gray-500 mb-3">Help</h3>
          <ul>
            <li className="text-gray-300 mb-3">Support</li>
            <li className="text-gray-300 mb-3">Troubleshooting</li>
            <li className="text-gray-300 mb-3">Contact Us</li>
            <li className="text-gray-300 mb-3">Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
