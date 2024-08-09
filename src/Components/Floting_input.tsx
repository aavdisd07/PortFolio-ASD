const Floating_input = (props: any) => {
  return (
    <div className="relative">
      {props.id != "message" ?
        <input
          type="text" value={props.value} onChange={(e) => props.handleChange(props.id, e.target.value)}
          id={props.id}
          className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border border-primaryColor-600 hover:shadow-[0_0_8px_0_#64FFDA70] appearance-none  focus:outline-none focus:ring-0 focus:border-primaryColor peer"
          placeholder=" "
        /> :
        <textarea name={props.id} id={props.id} rows={4} className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent hover:shadow-[0_0_8px_0_#64FFDA50] rounded-xl border border-primaryColor-600 appearance-none  focus:outline-none focus:ring-0 focus:border-primaryColor peer" placeholder=" "></textarea>}
      <label
        htmlFor={props.id}
        className={`absolute text-xl text-pink-600 duration-300 transform -translate-y-4 scale-100  top-1 z-10 origin-[0] bg-bgColor  px-2 peer-focus:px-2 peer-focus:text-primaryColor-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 ${props.id!="message"?"peer-placeholder-shown:top-1/2":"peer-placeholder-shown:top-6"} peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
      >
        {props.name}
      </label>
    </div>
  );
};
export default Floating_input;                      
