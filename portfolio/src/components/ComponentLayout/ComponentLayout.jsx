function ComponentLayout({ title = null, component }) {
  return (
    <>
      {title != null ? (
        <div className="Component-Layout">
          <div className="Component-Layout__title">{title}</div>
          <div className="p-8">{component}</div>
        </div>
      ) : (
        <>{component}</>
      )}
    </>
  );
}

export default ComponentLayout;
