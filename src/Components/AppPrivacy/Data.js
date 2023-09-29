import { IoMdContact } from "react-icons/io";
import { HiIdentification } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";

const data = [
  {
    id: "1",
    image: <IoMdContact />,
    title: "Data Linked to You",
    paragraph:
      "The following data may be collected and linked to your identity:",
    icons: [
      {
        id: "1",
        title: "Contant info",
        icon: <MdInfo />,
      },
      {
        id: "2",
        title: "User Contant",
        icon: <FaPhotoVideo />,
      },
      {
        id: "3",
        title: "Identifiers",
        icon: <HiIdentification />,
      },
      {
        id: "4",
        title: "Diagnostics",
        icon: <IoMdSettings />,
      },
      {
        id: "5",
        title: "Other Data",
        icon: <IoEllipsisHorizontalCircleSharp />,
      },
    ],
  },
];

export default data;

export const data_1 = [
  {
    id: "1",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path d="M7.36 17l3.208 3.208A24.23 24.23 0 007.39 32.235c0 13.44 10.93 24.374 24.366 24.374 4.374 0 8.483-1.159 12.035-3.186L47 56.631A28.616 28.616 0 0131.756 61C15.874 61 3 48.122 3 32.235A28.637 28.637 0 017.36 17zM9.77 6.642l47.588 47.606a2.204 2.204 0 010 3.11 2.206 2.206 0 01-3.111 0L6.632 9.753c-.829-.8-.856-2.283 0-3.11.826-.828 2.253-.886 3.138 0zM32.238 3C48.123 3 61 15.878 61 31.761c0 5.597-1.599 10.82-4.364 15.239l-3.208-3.209a24.221 24.221 0 003.182-12.03c0-13.437-10.934-24.37-24.372-24.37a24.223 24.223 0 00-12.03 3.18L17 7.363A28.628 28.628 0 0132.238 3zm-7.492 31L36 45H18.373C17.44 45 17 44.418 17 43.572c0-2.224 2.5-7.11 7.746-9.572zm6.915-20C35.733 14 39 17.634 39 22.002c0 2.419-.874 4.529-2.281 5.998L26 16.923C27.343 15.145 29.376 14 31.661 14z"></path>
      </svg>
    ),
    title: "Data Not Linked to You",
    paragraph:
      "The following data may be collected but it is not linked to your identity:",
    icons: [
      {
        id: "1",
        title: "Financial Info",
        icon: <BsFillCreditCardFill />,
      },
      {
        id: "2",
        title: "Contant info",
        icon: <MdInfo />,
      },
      {
        id: "3",
        title: "Identifiers",
        icon: <HiIdentification />,
      },
      {
        id: "4",
        title: "Diagnostics",
        icon: <IoMdSettings />,
      },
    ],
  },
];
