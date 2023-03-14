interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={`max-w-5xl px-4 mx-auto ${className}`}>{children}</div>
  );
};
export default Container;
