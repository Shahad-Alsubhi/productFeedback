const CloseIcon = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <svg
      width="20"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
      className="md:hidden"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
      </g>
    </svg>
  );
};

export default CloseIcon;
