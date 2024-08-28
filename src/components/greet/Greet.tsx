
type GreetProps = {
    name?: string;  // Optional prop
}

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
