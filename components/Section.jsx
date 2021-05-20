const Section = props => {
  const { label, children } = props;

  return (
    <div className='w-full bg-white px-32 py-8'>
      <h1 className='text-black text-5xl mb-8'>{label}</h1>
      {children}
    </div>
  );
};

export default Section;
