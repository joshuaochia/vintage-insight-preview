import Image from "next/image";

const PostAuthor = (props) => {
  const { author, date, inspectorProps } = props;

  return (
    <div className="flex flex-row items-center mb-4 mt-4">
      <div className="md:mr-2 whitespace-nowrap flex flex-col">
        <span {...inspectorProps({ fieldId: "name" })}>{author} </span>
        <span
          className="font-bold text-xs"
          {...inspectorProps({ fieldId: "date" })}
        >
          {date}{" "}
        </span>
      </div>
    </div>
  );
};

export default PostAuthor;
