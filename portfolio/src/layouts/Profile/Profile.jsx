function Profile() {
  return (
    <div className="flex items-center relative my-8">
      <div className="basis-1/2 place-items-center bg-sub-bg rounded-3xl ring-1 ring-background">
        <img
          src="../src/assets/main-avt.jpeg"
          className="p-3 size-45 rounded-full m-7"
        ></img>
        <div className="separate-content"></div>
        <div>info01</div>
      </div>
      <div className="about__knowledge basis-1/2">info02</div>
    </div>
  );
}

export default Profile;
