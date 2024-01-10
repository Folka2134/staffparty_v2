function MusicPage() {
  return (
    <div className="flex flex-col items-stretch bg-stone-950 pb-3">
      {/* <div
        className="mt-5 w-[845px] max-w-full items-center justify-center self-center whitespace-nowrap bg-stone-950 px-16 pb-44 pt-56 text-center text-xl font-semibold text-stone-300 max-md:py-10"
        aria-label="Youtube embeded video"
        role="region"
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IgYhzPhto9A?si=3Bw8P-iR3Rd2BbOA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
      <div
        className="mt-5 w-[1219px] max-w-full items-center justify-center self-center bg-neutral-800 px-16 pb-44 pt-56 text-center text-xl font-semibold text-stone-300 max-md:px-5 max-md:py-10"
        aria-label="Bandcamp embeded eps"
        role="region"
      >
        Bandcamp embeded eps
      </div>
    </div>
  );
}

export default MusicPage;
