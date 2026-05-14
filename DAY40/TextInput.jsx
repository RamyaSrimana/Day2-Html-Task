import Forms from "./Forms";
function TextInput({label,type,value,onChange}){
 return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextInput