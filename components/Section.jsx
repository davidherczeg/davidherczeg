const Section = props => {
  const { label, children } = props;

  return (
    <div className='w-full bg-white px-12 md:px-32 lg:px-16 xl:px-32 py-12'>
      <h1 className='text-black text-5xl mb-8'>{label}</h1>
      {children}
    </div>
  );
};

export default Section;
