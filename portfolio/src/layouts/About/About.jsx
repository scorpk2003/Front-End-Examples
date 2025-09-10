function About() {
  return (
    <div className="about">
      <div className="about__content">
        Hello, Im Gia Khang. Im a Fullstack Developer, my tech-stack is MERN
        Stack. Beside that I have another skill relate are Gen AI, automation,
        ... Im working and living at Thu Duc. Now Im still finding a job, if Im
        appropriate with the person that you finding, please
        <span className="cursor-pointer space-x-1 m-2 text-heading">
          <div className="inline">give me a chance</div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4.5"
              stroke="currentColor"
              className="size-3 inline items-center justify-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
        </span>
      </div>
      <div className="rounded-full bg-[url(../src/assets/main-avt.jpeg)] size-80 bg-cover bg-no-repeat"></div>
    </div>
  );
}

export default About;
