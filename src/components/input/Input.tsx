import "./Input.css";

interface InputProps {
  input: string;
  handleInput: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ input, handleInput }: InputProps) => {
  return (
    <div className="[grid-area:input] flex justify-center pb-4 input">
      <input
        value={input}
        onChange={handleInput}
        type="text"
        placeholder="Search characters..."
        className="border-0 outline-0 border-b-2 border-b-[#393939] w-100 placeholder:text-center text-center text-[18px] font-bold"
      />
    </div>
  );
};

export default Input;
