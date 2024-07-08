const getChangelog = async () => {
  const response = await fetch("https://orion-apiv1.vercel.app/changelog", {
    next: {
      revalidate: 300 // caching for 5 minutes (60*5)
    }
  });
  return response.json();
};

const Changelog = async () => {
  const changelog = await getChangelog();

  return (
    <div className="changelog w-full">
      <div className="p-4 py-24 container  mx-auto">
        <h1 className="text-xl md:text-xl lg:text-2xl font-bold mb-4 animate__animated animate__fadeInLeft">Changelogs</h1>
        <hr className="my-1 bg-gray-300 animate__animated animate__fadeIn h-0.5" />
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
          { changelog.map((changelog, index) => (
            <div key={index} className="mb-4 border border-neutral-300 p-4 bg-neutral-50 rounded-lg animate__animated animate__fadeInUp animate__delay-1s">
              <h2 className="text-md lg:text-xl font-semibold">{changelog.date}</h2>
              <ul className="list-disc list-inside ml-4 text-normal">
                { changelog.changes.map((change, indx) => (
                  <li key={indx}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
