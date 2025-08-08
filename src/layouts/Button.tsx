
interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="px-6 py-1 border-white bg-[#ffdcab] hover:text-[#ab6b2e] transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;