const Label = ({
  lable,
  description,
  htmlFor,
}: {
  lable: string;
  description: string;
  htmlFor: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="font-bold ">
      {lable}
      <span className="text-gray-default block font-normal mb-2">
        {description}
      </span>
    </label>
  );
};

export default Label;
