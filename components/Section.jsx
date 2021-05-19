import Image from 'next/image';

const Section = props => {
  const { label } = props;

  return (
    <div className='w-full bg-white px-32 py-8' style={{ height: 500 }}>
      <h1 className='text-black text-5xl mb-8'>{label}</h1>
      <div className='flex'>
        <div>
          <p className='text-lg mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            eget rhoncus enim. Nulla porta leo quis iaculis rhoncus. Suspendisse
            purus diam, fermentum sit amet pretium at, elementum eu purus. Nunc
            quis feugiat tortor. Morbi tincidunt ligula nisi, eget eleifend nisi
            commodo ac. Integer commodo vehicula lectus, eu facilisis lectus
            vulputate id. Donec euismod orci enim, vitae accumsan arcu commodo
            sed. Donec porttitor tortor lacus, eu euismod dui luctus et. Cras
            luctus, magna in semper blandit, massa quam commodo dui, at suscipit
            eros elit ut dolor. In blandit vestibulum libero, quis laoreet
            mauris viverra id. Duis condimentum mollis enim, sit amet finibus
            quam sodales vitae. Quisque quis suscipit metus, in ultrices felis.
          </p>
          <p className='text-lg mb-4'>
            Nulla hendrerit enim eget sem bibendum maximus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Duis eu consequat massa. Aenean pellentesque dolor
            sit amet blandit ullamcorper. Integer tristique, eros quis blandit
            mattis, arcu metus placerat elit, eu efficitur leo turpis ac nibh.
            Maecenas placerat tellus eu ex mollis commodo. Etiam rutrum velit ac
            mi tincidunt posuere.
          </p>
        </div>
        <div className='flex-none mx-8'>
          <Image
            className='rounded-full'
            src='/david_herczeg.jpg'
            alt='David Herczeg'
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
